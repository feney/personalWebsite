const homepage = () => {
    return `
    <section class="hero is-primary is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Brett's website
        </h1>
        <h2 class="subtitle">
          
        </h2>
      </div>
    </div>
  </section>
    `
}

const emailAddress = () => {
    return `
    <label><b>Insert Email Address</b></label>
    <input class="input" />
    <img src="${headshot}"width=300>
    `
};

const headshot = "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/131411246_10215523625242500_4483304723780061501_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=-ChlwSSkSbsAX_fYWJd&_nc_ht=scontent.faus1-1.fna&oh=1907b1fe2525ed38f860ad23e8576c09&oe=603F0DBA"



document.querySelector('#homepage').innerHTML = homepage();
document.querySelector('#emailAddress').innerHTML = emailAddress();


// const functions = request('firebase-functions');

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("hello world");
// });