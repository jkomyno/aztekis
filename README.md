## Aztekis

### install
```bash
npm install
npm start
```

On another shell, type:
```bash
mongod --dbpath .
```
to start the MongoDB instance.

### Sample POST request
```bash
curl -X POST -H "Cache-Control: no-cache" -H "Content-Type: application/x-www-form-urlencoded" -d 'payload={mainland:'it',created_at:'Sat Oct 22 2016 23:07:00', game_specs: {game_name: 'tap tap signor .com', highest_score: -5, classific: 0}, device_specs: 'bla bla bla'}' "http://localhost:3000/entries"
```