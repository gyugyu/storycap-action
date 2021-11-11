# Storycap action

Capture all pages of storybook, static pages, and so on using Storycap and Puppeteer on Docker.

## Inputs

### `strategy`

Strategy for server command, currently supported: `start-storybook`, `http-server`, `none`. Default is `start-storybook`.

### `path`

Path to serve with http-server strategy. Default is `dist`.

### `server_cmd`

Direct config of `server_cmd`.

### `port`

Port to capture. Default is `9000`.

### `https`

Usage of https schema. Default is `false`.

### `host`

Host to capture. Default is `localhost`.

### `working_dir`

Working directory.

## Example usage

```yaml
uses: gyugyu/storycap-action@v1
with:
  strategy: http-server
```
