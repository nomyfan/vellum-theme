// Theme sample: Swift syntax mix.

import Foundation

struct User {
    let id: Int
    var name: String
    var tags: [String]
}

enum Status {
    case ok
    case notFound(Int)
}

protocol Greeter {
    func greet(prefix: String) -> String
}

extension User: Greeter {
    func greet(prefix: String) -> String {
        return "\(prefix), \(name)"
    }
}

func maybeStatus(id: Int) throws -> Status {
    if id == 0 {
        throw NSError(domain: "Theme", code: 1)
    } else if id % 2 == 0 {
        return .ok
    } else {
        return .notFound(id)
    }
}

func transform<T>(_ values: [T], map: (T) -> String) -> [String] {
    return values.map { map($0) }
}

let user = User(id: 1, name: "Ada", tags: ["dev", "theme"])
print(user.greet(prefix: "Hi"))

let result = try? maybeStatus(id: user.id)
if case let .notFound(value)? = result {
    print("missing \(value)")
}

let mapped = transform([1, 2, 3]) { "num:\($0)" }
print(mapped.joined(separator: ","))
