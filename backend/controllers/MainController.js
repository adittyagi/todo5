module.exports = {
  profile: profile,
  signin: signin,
  signup: signup
};

function profile(req, res) {
  res.render("profile");
}

function signin(req, res) {
  res.render("signin");
}

function signup(req, res) {
  res.render("signup");
}