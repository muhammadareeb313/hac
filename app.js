let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
            window.location.href = 'signin.html'
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}

let signIn = () => {
    var email = document.getElementById('email-signIn').value
    var password = document.getElementById('pass-signIn').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
            var image = document.getElementById('file').files[0]
            var imgName = image.name
            
            var storage = firebase.storage().ref('images').child(imgName)
            var uploaod = storage.put(image)
            uploaod.ref('images').getDownloadURL().then((succ) => {
                console.log(succ)
            }).catch((error) => {
                console.log(error)
            })

            var admin = document.getElementById('admin')
            var user = document.getElementById('user')
            if (admin.checked) {
                window.location.href = 'index.html'
            } else if (user.checked) {
                window.location.href = 'quiz.html'

            } else { alert('please select category') }

        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });

}
var a = firebase.database().ref("quiz")

let send = () => {
    var a = document.getElementById("Select").value;
    console.log(a)

    var Q1 = document.getElementById('Q1').value
    var Q2 = document.getElementById('Q2').value
    var Q3 = document.getElementById('Q3').value

    var obj = {
        a,
        Q1,
        Q2,
        Q3,
    }

    //    console.log(obj)
    a.push(obj)


    var Q1 = document.getElementById('Q1').value = ""
    var Q2 = document.getElementById('Q2').value = ""
    var Q3 = document.getElementById('Q3').value = ""

}



// firebase.database().ref("quiz").on('child_added', function (data) {
    //    data.forEach(element => {
    //        document.getElementById('check').innerHTML+=`
    //        ${element.val()}`
    //    });

    // var a = data.val()
    // console.log(a)
    // for (var key in a) {
        // document.getElementById('check').innerHTML += `${a[key] + "</br>"}`
    // }
// })

