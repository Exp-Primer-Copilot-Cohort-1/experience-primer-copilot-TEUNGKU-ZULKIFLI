function skillsMember() {
    var memberSkills = document.getElementById("memberSkills");
    var memberProjects = document.getElementById("memberProjects");
    var memberContact = document.getElementById("memberContact");
    var memberAbout = document.getElementById("memberAbout");
    var memberResume = document.getElementById("memberResume");

    if(memberSkills) memberSkills.style.display = "block";
    if(memberProjects) memberProjects.style.display = "none";
    if(memberContact) memberContact.style.display = "none";
    if(memberAbout) memberAbout.style.display = "none";
    if(memberResume) memberResume.style.display = "none";
    memberSkills.style.display = "block";
    memberProjects.style.display = "none";
    memberContact.style.display = "none";
    memberAbout.style.display = "none";
    memberResume.style.display = "none";
}