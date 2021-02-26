@app
begin-app

@static

@http
get /api
get /api/date

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
