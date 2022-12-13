// autotest for method https://swapi.dev/api/people/10/

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("male");
    pm.expect(pm.response.text()).to.include("fair");
    pm.expect(pm.response.text()).to.include("77");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


// autotest for method https://api.hh.ru/metro/66

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

pm.test("Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});