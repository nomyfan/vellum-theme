"""Theme sample: Python syntax mix."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Iterable

PI = 3.14159
HEX = 0xFF
NAME = "vscode-theme"


@dataclass
class User:
    id: int
    name: str
    tags: list[str] | None = None

    def greet(self, prefix: str = "Hi") -> str:
        return f"{prefix}, {self.name}!"


def flatten(items: Iterable[Iterable[int]]) -> list[int]:
    return [x for group in items for x in group if x % 2 == 0]


async def fetch(url: str) -> dict[str, Any]:
    try:
        await io_sleep(0.01)
    except TimeoutError as exc:
        raise RuntimeError("timeout") from exc
    return {"url": url, "ok": True}


def match_example(value: Any) -> str:
    match value:
        case {"kind": "user", "name": name}:
            return f"user:{name}"
        case [first, *rest]:
            return f"list:{first}:{len(rest)}"
        case _ if value is None:
            return "none"
        case _:
            return "other"


def io_sleep(seconds: float) -> None:
    pass


if __name__ == "__main__":
    user = User(1, "Ada", ["dev", "theme"])
    print(user.greet())
    print(flatten([[1, 2], [3, 4]]))
    print(match_example({"kind": "user", "name": "Lin"}))
