export default class Target {
    constructor(name, health, attacks, img, modifier) {
        this.name = name;
        this.health = health;
        this.attacks = attacks;
        this.items = [] || "(No special active)";
        this.hits = 0;
        this.img = img;
        this.modifier = modifier
    }

    get IsDead() {
        return this.health <= 0
    }

    getTemplate() {
        return `
        <header class="row" id="stats">
        <div class="target-box col-12 text-white">
            <span class="title">Name: <span class="title" id="name">${this.name}</span></span><br>
            <span>HP: <span id="health">${this.health}</span></span><br>
            <span>Hits: <span id="hits">${this.hits}</span></span><br>
            <span><span id="modifier">${this.items}</span></span>
        </div>
        </header>
            <div class="row">
                <div class="col-12">
                    <img src="${this.img}">
                </div>
            </div>
            <footer class="row">
            <div class="col-12">
            <nav>
                <span id="message"></span><br>
            </nav>
            <img src="assets/slap.png" onclick="app.controllers.gameController.slap()">
            <img src="assets/punch.png" onclick="app.controllers.gameController.punch()">
            <img src="assets/kick.png" onclick="app.controllers.gameController.kick()">
        </div>
        <div class="col-12">
            <img src="assets/flash.png" onclick="app.controllers.gameController.addFlash()">
            <img src="assets/freeze.png" onclick="app.controllers.gameController.addFreeze()">
            <img src="assets/thunder.png" onclick="app.controllers.gameController.addThunder()">
            <img src="assets/reset.png" onclick="app.controllers.gameController.reset()">
        </div>
        <div class="col-12 text-white">

			<audio id="slap">
				<source src="assets/slap.wav" type="audio/wav">
			</audio>
			<audio id="punch">
				<source src="assets/punch.wav" type="audio/wav">
			</audio>
			<audio id="kick">
				<source src="assets/kick.wav" type="audio/wav">
			</audio>
			<audio id="flash">
				<source src="assets/flash.wav" type="audio/wav">
			</audio>
			<audio id="freeze">
				<source src="assets/freeze.wav" type="audio/wav">
			</audio>
			<audio id="thunder">
				<source src="assets/thunder.wav" type="audio/wav">
			</audio>
			<audio id="reset">
				<source src="assets/reset.wav" type="audio/wav">
			</audio>
		</div>
        
    </footer>`
    }
}