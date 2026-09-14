# SDEV 355 — Job Application Tracker

Starter code for the four take-home assignments. Over the quarter these build
one React app: a tracker for the jobs you have applied to and where each one
stands.

**Each take-home starts where the last one finished.** So the starter for #2 is
a finished #1, and so on. If you have your own working copy from the previous
assignment you are welcome to keep going in it instead — the starters are here
so that falling behind on one assignment does not cost you the next.

## The branches

| Branch | Assignment | You add |
|---|---|---|
| [`th1-starter`](../../tree/th1-starter) | [Take-Home #1](https://go.prmf.org/355/takehomes/1) | Components, props, lists, conditional rendering |
| [`th2-starter`](../../tree/th2-starter) | [Take-Home #2](https://go.prmf.org/355/takehomes/2) | State, events, fetching with effects |
| [`th3-starter`](../../tree/th3-starter) | [Take-Home #3](https://go.prmf.org/355/takehomes/3) | Routing, URL state, a custom hook |
| [`th4-starter`](../../tree/th4-starter) | [Take-Home #4](https://go.prmf.org/355/takehomes/4) | Forms, validation, context + reducer |

## Getting a starter

Download the ZIP from the branch page (**Code → Download ZIP**), or clone the
one branch you need:

```bash
git clone --branch th1-starter --single-branch \
  https://github.com/joshbarcher/355-takehome.git job-application-tracker
cd job-application-tracker
npm install
npm run dev
```

Then push it to **your own private repository** — that is what you submit, and
your work must not be pushed here.

```bash
rm -rf .git          # start your own history
git init
git add -A
git commit -m "Take-home #1 starter"
```

The branches have separate histories on purpose, so nothing pulls one stage's
answers into another.
