var logid = 0;
var userdetails = {
  
  2: { name: "ben", password: "1212", role: "User" },

};
var events = {
  1: {
    address: "",
    date: "",
    endtime: "",
    eventname: "",
    starttime: "",
    user: "",
  },
};
var pendingevent = {
  1: {
    address: "pondy",
    date: "2022-10-30",
    endtime: "06:57",
    eventname: "birthday",
    starttime: "01:57",
    user: "ganesh",
  },
};
var pendinguser = { 1: { name: "ganesh", password: "1212", role: "User" } };
var pendingenquiry = {
  1: {
    firstname: "ben",
    lastname: "sk",
    address: "farnce",
    phone: "9952363956",
    subject: "need enquiry for conference",
  },
};
function deletepevent(e) {
  delete pendingevent[e];

  var out = generatepending();
  $("#pending").html(out);
  var out = generateventsuser();
  $("#userEvent").html(out);
}

function deleteuser(e) {
  delete pendinguser[e];

  var out = generatepending();
  $("#pending").html(out);
}

function deleteenquiry(e) {
  delete pendingenquiry[e];

  var out = generatepending();
  $("#pending").html(out);
}
function acceptuser(e) {
  var size = Object.keys(userdetails).length;
  userdetails[size + 1] = pendinguser[e];
  delete pendinguser[e];
  var out = generatepending();
  $("#pending").html(out);
}

function acceptpevent(e) {
  var size = Object.keys(events).length;
  events[size + 1] = pendingevent[e];
  delete pendingevent[e];
  var out = generatepending();
  $("#pending").html(out);
}

function generatepending() {
  var out = `<table class="table table-bordered">
      <thead>
          <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Start</th>
              <th>End Time</th>
              <th>Address</th>
              <th>User</th>
              <th>Delete</th>
              <th>Edit</th>
          </tr>
      </thead>
      <tbody>`;
  for (var k in pendingevent) {
    out += `
        <tr>
              <td>${pendingevent[k]["eventname"]}</td>
              <td>${pendingevent[k]["date"]}</td>
              <td>${pendingevent[k]["starttime"]}</td>
              <td>${pendingevent[k]["endtime"]}</td>
              <td>${pendingevent[k]["address"]}</td>
              <td>${pendingevent[k]["user"]}</td>
              <td><button class="btn btn-primary" onclick=deletepevent(${k})>Delete</button></td>
              <td><button class="btn btn-primary" onclick=acceptpevent(${k})>Accept</button></td>
          </tr>`;
  }
  out += `</tbody>
      </table>`;

  out += `<h1>Pending user</h1>
    <table class="table table-bordered">
      <thead>
          <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Accept</th>
          </tr>
      </thead>
      <tbody>`;
  for (var k in pendinguser) {
    out += `
        <tr>
              <td>${pendinguser[k]["name"]}</td>
              <td>${pendinguser[k]["password"]}</td>
              <td>${pendinguser[k]["role"]}</td>
              <td><button class="btn btn-primary" onclick=deleteuser(${k})>Delete</button></td>
              <td><button class="btn btn-primary" onclick=acceptuser(${k})>Accept</button></td>           
   
          </tr>`;
  }
  out += `</tbody>
      </table>`;

  out += `<h1>Pending Enquiry</h1>
      <table class="table table-bordered">
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>`;
  for (var k in pendingenquiry) {
    out += `
          <tr>
                <td>${pendingenquiry[k]["firstname"]}</td>
                <td>${pendingenquiry[k]["lastname"]}</td>
                <td>${pendingenquiry[k]["address"]}</td>
                <td>${pendingenquiry[k]["phone"]}</td>
                <td>${pendingenquiry[k]["subject"]}</td>
                <td><button class="btn btn-primary" onclick=deleteenquiry(${k})>Delete</button></td>
                
     
            </tr>`;
  }
  out += `</tbody>
        </table>`;
  return out;
}
function deletes(e) {
  for (var k in events) {
    if (k == e) {
      delete events[k];
    }
  }

  var out = generatevents();
  $("#Event").html(out);
}

function edit(e) {
  $("#pending").hide();
  $("#Event").hide();
  $("#addEvent").show();
  document.querySelector("#ids").value = e;
  document.querySelector("#ename").value = events[e]["eventname"];
  document.querySelector("#edate").value = events[e]["date"];
  document.querySelector("#est").value = events[e]["starttime"];
  document.querySelector("#een").value = events[e]["endtime"];
  document.querySelector("#addres").value = events[e]["address"];
  document.querySelector("#euser").value = events[e]["user"];
}
function edituser(e) {
  $("#userEvent").hide();
  $("#useraddEvent").show();
  document.querySelector("#uids").value = e;
  document.querySelector("#uname").value = events[e]["eventname"];
  document.querySelector("#udate").value = events[e]["date"];
  document.querySelector("#ust").value = events[e]["starttime"];
  document.querySelector("#uen").value = events[e]["endtime"];
  document.querySelector("#uaddres").value = events[e]["address"];
  document.querySelector("#uuser").value = events[e]["user"];
}

function generatevents() {
  var out = `<table class="table table-bordered">
      <thead>
          <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Start</th>
              <th>End Time</th>
              <th>Address</th>
              <th>User</th>
              <th>Delete</th>
              <th>Edit</th>
          </tr>
      </thead>
      <tbody>`;
  for (var k in events) {
    out += `
        <tr>
              <td>${events[k]["eventname"]}</td>
              <td>${events[k]["date"]}</td>
              <td>${events[k]["starttime"]}</td>
              <td>${events[k]["endtime"]}</td>
              <td>${events[k]["address"]}</td>
              <td>${events[k]["user"]}</td>
              <td><button class="btn btn-primary" onclick=deletes(${k})>Delete</button></td>
              <td><button class="btn btn-primary" onclick=edit(${k})>edit</button></td>
          </tr>`;
  }
  out += `</tbody>
      </table>`;
  return out;
}
function generateventsuser() {
  console.log(logid);
  var out = `<table class="table table-bordered">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Start</th>
                <th>End Time</th>
                <th>Address</th>
                <th>User</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>`;
  for (var k in events) {
    console.log([events[k]["user"], logid]);
    if (events[k]["user"] == logid) {
      out += `
                <tr>
                        <td>${events[k]["eventname"]}</td>
                        <td>${events[k]["date"]}</td>
                        <td>${events[k]["starttime"]}</td>
                        <td>${events[k]["endtime"]}</td>
                        <td>${events[k]["address"]}</td>
                        <td>${events[k]["user"]}</td>
                        <td><button class="btn btn-primary" onclick=deletes(${k})>Delete</button></td>
                        <td><button class="btn btn-primary" onclick=edituser(${k})>edit</button></td>
                    </tr>`;
    }
  }
  out += `</tbody>
        </table>`;

  out += `<h1>Pending for acceptance</h1>
        <table class="table table-bordered">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Start</th>
                <th>End Time</th>
                <th>Address</th>
                <th>User</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>`;
  for (var k in pendingevent) {
    if (pendingevent[k]["user"] == logid) {
      out += `
                <tr>
                        <td>${pendingevent[k]["eventname"]}</td>
                        <td>${pendingevent[k]["date"]}</td>
                        <td>${pendingevent[k]["starttime"]}</td>
                        <td>${pendingevent[k]["endtime"]}</td>
                        <td>${pendingevent[k]["address"]}</td>
                        <td>${pendingevent[k]["user"]}</td>
                        <td><button class="btn btn-primary" onclick=deletepevent(${k})>Delete</button></td>                        
                    </tr>`;
    }
  }
  out += `</tbody>
        </table>`;
  return out;
}
function generateventsforvistors() {
  var out = `
  <h1>All Future Events</h1>
  <table class="table table-bordered">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Start</th>
                <th>End Time</th>
                <th>Address</th>
                <th>User</th>
            </tr>
        </thead>
        <tbody>`;
  for (var k in events) {
    out += `
          <tr>
                <td>${events[k]["eventname"]}</td>
                <td>${events[k]["date"]}</td>
                <td>${events[k]["starttime"]}</td>
                <td>${events[k]["endtime"]}</td>
                <td>${events[k]["address"]}</td>
                <td>${events[k]["user"]}</td>
              
            </tr>`;
  }
  out += `</tbody>
        </table>`;
  return out;
}

var su = document.querySelector("#esub");
su.addEventListener("click", function () {
  var ids = document.querySelector("#ids").value;

  var ename = document.querySelector("#ename").value;
  var edate = document.querySelector("#edate").value;
  var est = document.querySelector("#est").value;
  var een = document.querySelector("#een").value;
  var addres = document.querySelector("#addres").value;
  var user = document.querySelector("#euser").value;
  if (ids == 0) {
    var size = Object.keys(events).length;
    events[size + 1] = {
      eventname: ename,
      date: edate,
      starttime: est,
      endtime: een,
      address: addres,
      user: user,
    };
  } else {
    events[ids] = {
      eventname: ename,
      date: edate,
      starttime: est,
      endtime: een,
      address: addres,
      user: user,
    };
  }
  document.querySelector("#ids").value = "";
  document.querySelector("#ename").value = "";
  document.querySelector("#edate").value = "";
  document.querySelector("#est").value = "";
  document.querySelector("#een").value = "";
  document.querySelector("#addres").value = "";
  document.querySelector("#euser").value = "";
});
var su = document.querySelector("#usub");
su.addEventListener("click", function () {
  var ids = document.querySelector("#uids").value;

  var ename = document.querySelector("#uname").value;
  var edate = document.querySelector("#udate").value;
  var est = document.querySelector("#ust").value;
  var een = document.querySelector("#uen").value;
  var addres = document.querySelector("#uaddres").value;
  var user = document.querySelector("#uuser").value;
  if (ids == 0) {
    var size = Object.keys(pendingevent).length;
    pendingevent[size + 1] = {
      eventname: ename,
      date: edate,
      starttime: est,
      endtime: een,
      address: addres,
      user: user,
    };
  } else {
    events[ids] = {
      eventname: ename,
      date: edate,
      starttime: est,
      endtime: een,
      address: addres,
      user: user,
    };
  }
  document.querySelector("#uids").value = "";
  document.querySelector("#uname").value = "";
  document.querySelector("#udate").value = "";
  document.querySelector("#ust").value = "";
  document.querySelector("#uen").value = "";
  document.querySelector("#uaddres").value = "";
});
var bu = document.querySelector("#bt");
bu.addEventListener("click", function () {
  var user = document.querySelector("#rname").value;
  var pas = document.querySelector("#rpwds").value;
  var role = document.querySelector("#rrole").value;
  var size = Object.keys(pendinguser).length;
  pendinguser[size + 1] = { name: user, password: pas, role: role };

  alert("User details pending for approval");
  var user = (document.querySelector("#rname").value = "");
  var pas = (document.querySelector("#rpwds").value = "");
  var role = (document.querySelector("#rrole").value = "");
});
var lg = document.querySelector("#log");
lg.addEventListener("click", function () {
  var user = document.querySelector("#lame").value;
  var pas = document.querySelector("#lpwd").value;
  var role = document.querySelector("#lrole").value;
  var r = 0;
  for (var k in userdetails) {
    if (
      userdetails[k].name === user &&
      userdetails[k].password === pas &&
      userdetails[k].role == role
    ) {
      r = 1;
      break;
    }
  }
  if (r === 1) {
    $("#loginnav").hide();
    $("#regnav").hide();
    $("#logoutm").show();
    $("#menu5").removeClass();
    $("#menu5").addClass("tab-pane container fade");
    if (userdetails[k].role === "Admin") {
      $("#adm").show();
      $("#ad").removeClass();
      $("#ad").addClass("nav-link active");
      $("#Admin").addClass("tab-pane container active");
      var out = generatevents();
      $("#Event").html(out);
    } else if (userdetails[k].role === "User") {
      $("#userm").show();
      $("#user").removeClass();
      $("#user").addClass("nav-link active");
      $("#User").addClass("tab-pane container active");
      $("#userEvent").show();
      $("#uuser").val(userdetails[k].name);
      logid = userdetails[k].name;
      var out = generateventsuser();
      $("#userEvent").html(out);
    } else if (userdetails[k].role === "Visitors") {
      $("#vis").show();
      $("#vis").removeClass();
      $("#vis").addClass("nav-item");
      $("#first").addClass("btn btn-primary");
      $("#home").addClass("tab-pane container active");
    }
  } else {
    alert("login failed check again");
  }
});

var lg = document.querySelector("#logout");
lg.addEventListener("click", function () {
  $("#loginnav").show();
  $("#ln").removeClass();
  $("#ln").addClass("nav-link active");
  $("#regnav").show();
  $("#logoutm").hide();
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container active");
  $("#adm").hide();
  $("#userm").hide();
  $("#vis").hide();
  $("#vis").removeClass();
  $("#vis").addClass("nav-link");

  $("#user").removeClass();
  $("#user").addClass("nav-link");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
  $("#ad").removeClass();
  $("#ad").addClass("nav-link");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  document.querySelector("#rname").value = "";
  document.querySelector("#rpwds").value = "";
  document.querySelector("#rrole").value = "";
  document.querySelector("#lame").value = "";
  document.querySelector("#lpwd").value = "";
  document.querySelector("#lrole").value = "";
});

var ae = document.querySelector("#ae");
ae.addEventListener("click", function () {
  document.querySelector("#ids").value = 0;
  document.querySelector("#ename").value = "";
  document.querySelector("#edate").value = "";
  document.querySelector("#est").value = "";
  document.querySelector("#een").value = "";
  document.querySelector("#addres").value = "";
  document.querySelector("#euser").value = "";
  $("#pending").hide();
  $("#Event").hide();
  $("#addEvent").show();
  $("#ae").removeClass();
  $("#ae").addClass("btn btn-danger");
  $("#ace").removeClass();
  $("#ace").addClass("btn btn-primary");
  $("#pn").removeClass();
  $("#pn").addClass("btn btn-primary");
});
var ace = document.querySelector("#ace");
ace.addEventListener("click", function () {
  var out = generatevents();
  $("#Event").html(out);
  $("#pending").hide();
  $("#Event").show();
  $("#addEvent").hide();
  $("#ae").removeClass();
  $("#ae").addClass("btn btn-primary");
  $("#ace").removeClass();
  $("#ace").addClass("btn btn-danger");
  $("#pn").removeClass();
  $("#pn").addClass("btn btn-primary");
});
var pn = document.querySelector("#pn");
pn.addEventListener("click", function () {
  var out = generatepending();
  $("#pending").html(out);
  $("#pending").show();
  $("#Event").hide();
  $("#addEvent").hide();
  $("#ae").removeClass();
  $("#ae").addClass("btn btn-primary");
  $("#ace").removeClass();
  $("#ace").addClass("btn btn-primary");
  $("#pn").removeClass();
  $("#pn").addClass("btn btn-danger");
});
var adenq = document.querySelector("#adenq");
adenq.addEventListener("click", function () {
  var size = Object.keys(pendingenquiry).length;
  pendingenquiry[size + 1] = {
    firstname: document.querySelector("#fname").value,
    lastname: document.querySelector("#lname").value,
    address: document.querySelector("#address").value,
    phone: document.querySelector("#phone").value,
    subject: document.querySelector("#subject").value,
  };
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#subject").value = "";

  alert("your enquiry added successfully");
});
function men2ren() {
  var out = generateventsforvistors();
  $("#menu3data").html(out);
}
var uae = document.querySelector("#uae");
uae.addEventListener("click", function () {
  $("#uae").removeClass();
  $("#uae").addClass("btn btn-danger");
  $("#upn").removeClass();
  $("#upn").addClass("btn btn-primary");
  $("#userEvent").hide();
  $("#useraddEvent").show();
  document.querySelector("#uids").value = "";
  document.querySelector("#uname").value = "";
  document.querySelector("#udate").value = "";
  document.querySelector("#ust").value = "";
  document.querySelector("#uen").value = "";
  document.querySelector("#uaddres").value = "";
});

var uae = document.querySelector("#upn");
uae.addEventListener("click", function () {
  $("#upn").removeClass();
  $("#upn").addClass("btn btn-danger");
  $("#uae").removeClass();
  $("#uae").addClass("btn btn-primary");
  $("#userEvent").show();
  $("#useraddEvent").hide();
  var out = generateventsuser();
  $("#userEvent").html(out);
});
var home = document.querySelector("#first");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn btn-primary");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container  active");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});
var home = document.querySelector("#second");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn btn-primary");
  $("#third").removeClass();
  $("#third").addClass("btn ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container active");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});
var home = document.querySelector("#third");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn btn-primary ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");
  var out = generateventsforvistors();
  $("#menu3data").html(out);
  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container ");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container active");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});

var home = document.querySelector("#four");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn  ");
  $("#four").removeClass();
  $("#four").addClass("btn btn-primary");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container ");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container ");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container active");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});

var home = document.querySelector("#res");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn  ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn btn-primary");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container ");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container ");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container ");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container  active");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});

var home = document.querySelector("#ln");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn  ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn btn-primary");
  $("#ad").removeClass();
  $("#ad").addClass("btn ");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container ");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container ");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container ");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container active");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container ");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});

var home = document.querySelector("#ad");
home.addEventListener("click", function () {
  $("#first").removeClass();
  $("#first").addClass("btn ");
  $("#second").removeClass();
  $("#second").addClass("btn ");
  $("#third").removeClass();
  $("#third").addClass("btn  ");
  $("#four").removeClass();
  $("#four").addClass("btn ");
  $("#res").removeClass();
  $("#res").addClass("btn ");
  $("#ln").removeClass();
  $("#ln").addClass("btn ");
  $("#ad").removeClass();
  $("#ad").addClass("btn btn-primary");
  $("#vi").removeClass();
  $("#vi").addClass("btn ");

  $("#home").removeClass();
  $("#home").addClass("tab-pane container");
  $("#menu1").removeClass();
  $("#menu1").addClass("tab-pane container ");
  $("#menu3").removeClass();
  $("#menu3").addClass("tab-pane container ");
  $("#menu4").removeClass();
  $("#menu4").addClass("tab-pane container ");
  $("#menu5").removeClass();
  $("#menu5").addClass("tab-pane container ");
  $("#menu6").removeClass();
  $("#menu6").addClass("tab-pane container ");
  $("#Admin").removeClass();
  $("#Admin").addClass("tab-pane container active");
  $("#User").removeClass();
  $("#User").addClass("tab-pane container");
});
