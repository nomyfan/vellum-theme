// Theme sample: Rust syntax mix.

use std::collections::HashMap;

#[derive(Debug, Clone)]
struct User<'a> {
    id: u32,
    name: &'a str,
    tags: Vec<String>,
}

#[derive(Debug)]
enum Status {
    Ok,
    NotFound(u32),
}

trait Greeter {
    fn greet(&self) -> String;
}

impl<'a> Greeter for User<'a> {
    fn greet(&self) -> String {
        format!("Hi, {}", self.name)
    }
}

fn map_users<'a>(users: &[User<'a>]) -> HashMap<u32, &'a str> {
    users.iter().map(|u| (u.id, u.name)).collect()
}

fn maybe_status(id: u32) -> Result<Status, String> {
    if id == 0 {
        Err("bad id".into())
    } else if id % 2 == 0 {
        Ok(Status::Ok)
    } else {
        Ok(Status::NotFound(id))
    }
}

fn main() {
    let user = User {
        id: 1,
        name: "Ada",
        tags: vec!["dev".into(), "theme".into()],
    };

    let users = vec![user.clone()];
    let map = map_users(&users);

    match maybe_status(user.id) {
        Ok(Status::Ok) => println!("ok {:?}", map),
        Ok(Status::NotFound(id)) => println!("missing {}", id),
        Err(err) => eprintln!("err {}", err),
    }

    let doubled: Vec<u32> = (0..5).map(|n| n * 2).collect();
    println!("{} {}", user.greet(), doubled.len());
}
