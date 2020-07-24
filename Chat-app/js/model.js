const model = {}
model.register = (data) => {
    firebase.auth()
    .createUserwithEmailandPassword(dataEmail, dataPassword)
    .then( )
    firebase.auth().currentUser.updateProfile(
       displayName: data.FirstName + '' + data.Lastname
    )
    firebase.auth().currentUser.sendEmailVerrification()
    .catch (err) => {
        console.log(err) 
    }
    
}