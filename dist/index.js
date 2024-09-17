var _a;
var response = (_a = prompt("Deseja adicionar uma nave? (sim/não)")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
while (response === "sim") {
    function SpaceShip(name, pilot, crewLimit) {
        var crew = [];
        var inMission = false;
        while (crew.length < crewLimit) {
            var memberInput = prompt("Digite o nome do tripulante ".concat(crew.length + 1, ":"));
            if (memberInput) {
                crew.push(memberInput);
            }
        }
        var spaceShip = {
            name: name,
            pilot: pilot,
            crewLimit: crewLimit,
            crew: crew
        };
        function canSendShip() {
            return crew.length > crewLimit / 3;
        }
        function sendShip() {
            if (inMission) {
                console.log("A nave não está em missão.");
            }
            else if (canSendShip()) {
                inMission = true;
                console.log("A nave foi enviada em uma missão!");
            }
            else {
                console.log("A nave não pode ser enviada, menos de 1/3 dos tripulantes presentes.");
            }
        }
        function promptUserForMission() {
            var userChoice = prompt("Deseja enviar a nave em missão? (sim/não)");
            if ((userChoice === null || userChoice === void 0 ? void 0 : userChoice.toLowerCase()) === "sim") {
                sendShip();
            }
            else {
                console.log("A nave não foi enviada em missão.");
            }
        }
        return {
            spaceShip: spaceShip,
            sendShip: sendShip,
            promptUserForMission: promptUserForMission
        };
    }
    var spaceShipName = prompt("Insira o nome da nave");
    var spaceShipPilot = prompt("Insira o nome do piloto");
    var spaceShipCrewLimit = Number(prompt("Insira o número de tripulantes da nave"));
    if (spaceShipName && spaceShipPilot && spaceShipCrewLimit) {
        var currentSpaceShip = SpaceShip(spaceShipName, spaceShipPilot, spaceShipCrewLimit);
        currentSpaceShip.promptUserForMission();
        console.log(currentSpaceShip);
    }
    response = prompt("Deseja adicionar outra nave?(Sim/Nao)");
}
