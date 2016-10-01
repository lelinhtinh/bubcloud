# Bubcloud

> A responsive theme for [Forumotion](http://www.forumotion.com/).

## Install

```bash
git clone git@github.com:baivong/bubcloud.git
cd bubcloud
npm install
```

## Usage

Update your Forumotion with [Bubcloud templates](https://github.com/baivong/bubcloud/tree/master/templates).

Change [`homepage`](https://github.com/baivong/bubcloud/blob/master/package.json#L27) value in `package.json` with your Forumotion URL.

```bash
npm start
```

### Other commands

#### Build all

```bash
npm run build
```

#### Build js

```bash
npm run gulp js
```

#### Build css

```bash
npm run gulp less
```

#### Build archiver

```bash
npm run zip
```

#### Build when file changed

```bash
npm run gulp
```

#### Verifying code quality

```bash
npm test
```

#### Verifying js quality

```bash
npm run gulp eslint
```

#### Verifying css quality

```bash
npm run gulp stylelint
```

## Recommend

> [VScode](https://code.visualstudio.com) is lightweight, free, open source, runs everywhere. [Get it here](https://code.visualstudio.com/Download).

### [EditorConfig](http://editorconfig.org/)

```bash
code --install-extension EditorConfig.EditorConfig
```

### [ESlint](http://eslint.org/)

```bash
code --install-extension dbaeumer.vscode-eslint
```

### [Stylelint](http://stylelint.io/)

```bash
code --install-extension shinnn.stylelint
```

### [Format code](http://jsbeautifier.org/)

```bash
code --install-extension HookyQR.beautify
code --install-extension dweber019.vscode-style-formatter
```

## License

[MIT License](https://baivong.mit-license.org/) © [Zzbaivong](https://devs.forumvi.com/)
