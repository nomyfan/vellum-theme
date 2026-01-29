// Theme sample: Go syntax mix.

package main

import (
    "errors"
    "fmt"
    "time"
)

type User struct {
    ID   int
    Name string
    Tags []string
}

type Greeter interface {
    Greet(prefix string) string
}

func (u User) Greet(prefix string) string {
    return fmt.Sprintf("%s, %s", prefix, u.Name)
}

func maybeStatus(id int) (string, error) {
    switch {
    case id == 0:
        return "", errors.New("bad id")
    case id%2 == 0:
        return "ok", nil
    default:
        return fmt.Sprintf("missing %d", id), nil
    }
}

func worker(id int, ch chan<- int) {
    defer close(ch)
    ch <- id * 2
}

func main() {
    user := User{ID: 1, Name: "Ada", Tags: []string{"dev", "theme"}}
    fmt.Println(user.Greet("Hi"))

    status, err := maybeStatus(user.ID)
    if err != nil {
        fmt.Println("error:", err)
    } else {
        fmt.Println("status:", status)
    }

    ch := make(chan int)
    go worker(3, ch)
    select {
    case v := <-ch:
        fmt.Println("value:", v)
    case <-time.After(50 * time.Millisecond):
        fmt.Println("timeout")
    }
}
