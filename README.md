# Who-many is a simple load-balancing helper for LibChat.
## It shows, on the LC dashboard, the real-time count of callers currently engaged by each librarian.
### The tool is written in JavaScript and it runs in browser extensions such as [Tampermonkey](https://www.tampermonkey.net/ "Tampermonkey downloads and user guides") and [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/ "Greasemonkey for Firefox"). (The latter is a Firefox extension with a long history, and it's even been [ported to SeaMonkey](https://openuserjs.org/about/Greasemonkey-Port-for-SeaMonkey "Greasemonkey for SeaMonkey, just for Mimi!"), a niche browser beloved by certain superstar librarians; Tampermonkey runs on all major browsers including Chrome, Edge, Firefox, Opera, and Safari.)

### This script, and variations of it, has been confirmed to work in Chrome, Edge, and Firefox; presumably it would work in Safari but I don't recall if it's been tested there. Any questions, suggestions, or requests, just hit me up @bruce on our Slack.

### TODO: 
#### A significant potential improvement would add a timer mechanism to factor in the duration of extant chats, helping operators easily see who is due to pick up a new caller when the load is, superficially, numerically balanced. E.g., if each op has two chats underway, the tool could suggest that the *next* call should be taken by Operator B:
#### **Operator A:**  Call 1 started _3 minutes_ ago / Call 2 started _2 minutes_ ago
#### **Operator B:**  Call 1 started _60 minutes_ ago / Call 2 started _13 minutes_ ago
#### **Operator C:**  Call 1 started _15 minutes_ ago / Call 2 started _9 minutes_ ago
