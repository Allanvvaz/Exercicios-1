let response: string | null = prompt("Deseja adicionar uma nave? (sim/não)")?.toLowerCase();
while (response === "sim") {
  function SpaceShip(name: string, pilot: string, crewLimit: number) {
    const crew: string[] = [];
    let inMission = false;

    while (crew.length < crewLimit) {
      const memberInput = prompt(
        `Digite o nome do tripulante ${crew.length + 1}:`
      );
      if (memberInput) {
        crew.push(memberInput);
      }
    }

    const spaceShip = {
      name,
      pilot,
      crewLimit,
      crew
    };

    function canSendShip(): boolean {
      return crew.length > crewLimit / 3;
    }

    function sendShip(): void {
      if (inMission) {
        console.log("A nave não está em missão.");
      } else if (canSendShip()) {
        inMission = true;
        console.log("A nave foi enviada em uma missão!");
      } else {
        console.log(
          "A nave não pode ser enviada, menos de 1/3 dos tripulantes presentes."
        );
      }
    }

    function promptUserForMission(): void {
      const userChoice = prompt("Deseja enviar a nave em missão? (sim/não)");
      if (userChoice?.toLowerCase() === "sim") {
        sendShip();
      } else {
        console.log("A nave não foi enviada em missão.");
      }
    }

    
    return {
      spaceShip,
      sendShip,
      promptUserForMission
    };
  }

  const spaceShipName = prompt("Insira o nome da nave");
  const spaceShipPilot = prompt("Insira o nome do piloto");
  const spaceShipCrewLimit = Number(
    prompt("Insira o número de tripulantes da nave")
  );

  if (spaceShipName && spaceShipPilot && spaceShipCrewLimit) {
    const currentSpaceShip = SpaceShip(
      spaceShipName,
      spaceShipPilot,
      spaceShipCrewLimit
    );
    currentSpaceShip.promptUserForMission(); 
    console.log(currentSpaceShip);
  }
  response = prompt("Deseja adicionar outra nave?(Sim/Nao)");
}


