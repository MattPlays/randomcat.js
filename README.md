# randomcat.js
 randomcat.js utilizes the [randomcat API](https://aws.random.cat)

# Installation
```bash
npm i randomcat.js
```

# Usage
### Javascript
```javascript
const randomcat = require("randomcat.js");
randomcat().then(({file}) => {
    console.log(file);
});
```
### Typescript
```typescript
import randomcat from "randomcat.js"
randomcat().then(({file}) => {
    console.log(file);
});
```

# License
randomcat.js is Licensed under the [MIT License](https://github.com/MattPlays/randomcat.js/blob/main/LICENSE)