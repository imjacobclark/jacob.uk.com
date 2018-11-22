import app from './src/server'

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`));