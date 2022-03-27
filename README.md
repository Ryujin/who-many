# who-many is a lightweight load-balancing tool for LibChat. It shows, on the LC dashboard, the real-time count of callers currently engaged by each librarian operator.
The tool is written in JavaScript and designed to run in browser extensions such as Tampermonkey and Greasemonkey. (The latter is a Firefox extension with a long history; Tampermonkey runs on all major browsers including Chrome, Edge, Firefox, Opera, and Safari.)

This script, or variations of it, has been confirmed to work in Chrome, Edge, and Firefox; presumably it would work in Safari but I don't recall if it's been tested there.

TODO: A significant potential improvement would add a timer mechanism to factor in the duration of extant chats, to help operators easily see who is due to pick up a new chat when the load is, seemingly, numerically balanced: E.g., if each op has two calls underway, the tool could suggest that the next incoming call should go to Operator B:
----------------

Operator A:  Call 1 started 3 minutes ago / Call 2 started 2 minutes ago

Operator B:  Call 1 started 60 minutes ago / Call 2 started 13 minutes ago

Operator C:  Call 1 started 12 minutes ago / Call 2 started 5 minutes ago
