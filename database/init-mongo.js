db.createUser({
    user: 'user',
    pwd: 'as9v8y9348ehvfw39a8vfbh',
    roles: [
       {
         role: 'readWrite',
         db: 'synchatDB'
       }
    ]
});