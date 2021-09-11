# randomcat.js
 randomcat.js utilizes the [randomcat API](https://aws.random.cat)

# Installation
```bash
npm i @mattplays/randomcat.js
```

# Usage
### Javascript
```javascript
const randomcat = require("@mattplays/randomcat.js");
randomcat().then(({file}) => {
    console.log(file);
});
```
### Typescript
```typescript
import randomcat from "@mattplays/randomcat.js"
randomcat().then(({file}) => {
    console.log(file);
});
```

# License
randomcat.js is Licensed under the [MIT License](https://github.com/MattPlays/randomcat.js/blob/main/LICENSE)