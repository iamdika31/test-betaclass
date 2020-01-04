function is_username_valid(username){
    console.log(/^[a-zA-Z]{5,9}$/.test(username))
}
is_username_valid('NinjaPink')
is_username_valid('NinjaPinkS')

