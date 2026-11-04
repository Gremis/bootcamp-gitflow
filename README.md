# Bootcamp Gitflow

A small budget calculator project for practicing Gitflow. The current application displays `Budget Calculator` in the terminal.

Requires Node.js 20 or later. Run the application with:

```sh
npm start
```

Branch workflow:

- `production` represents the published version.
- `develop` integrates changes.
- `stage` validates changes before publication.
- Feature branches start from `develop` and return through pull requests.

Use the commit format `type: description`, for example:

```text
feat: add budget calculation
```
