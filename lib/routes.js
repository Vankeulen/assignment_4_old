if (Meteor.isClient) {
    Router.route("/", function() {

        this.render("hello");
    });

    Router.route("/info", function() {

        this.render("info");
    })

    Router.route("/professors/add", function() {

        this.render("addProfessor");
    })

    Router.route("/professors", function() {
        
        Meteor.subscribe("professors");
        this.render("viewAllProfessors");
    })
}