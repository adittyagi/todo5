const dbConn = require("../databases/sqlite.js"); //Line1
const User = dbConn.Users; //Line2
module.exports = {
  signup: signup,
  signin: signin
};
function signup(req, res) {
  const { name, email, password } = req.body;         //Line3
  if (!(name && email && password))  
  
  //if error, must redirect to signup page
    return res.redirect("/signup", {                     //Line5
      msg: "Please enter all the required details"
    });
  else {
    User.create({           //Line6
      name,
      email,
      password
    })
      .then((user) => {       
        if (user) {
          console.log(user);
          //grab the user data in session also then redirect to profile
          request.session.user_id = user.dataValues.id;
          //In below line you are rendering profile, but u didn't set-up profile page yet
          return res.redirect("/");
        }
      })
      .catch(err => {
        return res.redirect('/signup');
      });
  }
}

function signin(req, res) {
  const { email, password } = req.body;         //Line3
  if (!( email && password))                   //Line4
    return res.redirect("/signin", {                     //Line5
      msg: "Please enter all the required details"
    });
  else {
    User.findOne({
      Where:{
        email,
      password
        }
      
    })
      .then((user) => {       
        if (user) {
          console.log(user);
          //use session here
          request.session.user_id = user.dataValues.id;
          //than redirect to profile page eg: return res.redirect('/')
          return res.redirect("/");
        }
      })
      .catch(err => {
        //here you  are catching err, so user must be redirect to same page i.e 'signin page'
        return res.redirect("/signin");
      });
}
}