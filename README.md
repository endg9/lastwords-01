# Famous Last Words at 1 Percent

> At 1%, my last words: your screen time this week was 61 hours, and the photo you deleted? I kept a copy.

## Why it fits the brief

1. **On-subject** — "At 1%" names the dying-battery premise up front: the phone speaks its last words as its battery hits 1%.
2. **Bigger laugh** — the twist lands late: the phone has been keeping score (61 hours of screen time) and the deleted photo was never really deleted.
3. **Phone's own voice** — first person, from the phone itself, about its own dying battery.
4. **Tight single line** — one sentence, and the punch "I kept a copy." is now the final beat.
5. **Fresh** — no will reading, no goodbye to the charger, no pun on 1 percent. The joke is the phone's quiet revenge: it remembers everything you tried to erase.

## Run

```sh
node main.ts
```

This validates `entry.txt` (UTF-8, exactly one non-empty line, 1–199 characters, containing the load-bearing specifics) and writes the line to `MAKEFUN_OUTPUT_DIR/entry.txt`, or `./output/entry.txt` when that variable is unset, then reads it back and verifies it is byte-identical.

## License

MIT — see [LICENSE](LICENSE).
