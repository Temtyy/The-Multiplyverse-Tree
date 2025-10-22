let modInfo = {
	name: "The Multiplyverse Tree",
	author: "Temtyy",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2",
	name: "Remove everything",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.2 - Remove everything</h3><br>
		- Added the remover layer<br>
		- Added 5 new achievements<br>
		- Added no new secret achievements (I have no idea for any)<br>
	<h3>v0.1.2 - The super epic mini update</h3><br>
		- Added effect text to the multiplier and prestige tab<br>
		- Added a very secret achievement<br>
	<h3>v0.1.1 - The beninging + some help</h3><br>
		- Removed the help/explanations tab and the calculation inside (I still have no idea how to fix it, thanks to MsliAghtlyD for trying to help me anyway!)<br>
		- Added the difficulty tab and easier modes!<br>
		- Fixed formatting in a few places.<br>
		- Added the tluafed theme. (Please, do NOT try it, you'll go blind)<br>
		- Changed a few things I forgot to change before release.<br>
	<h3>v0.1 - The beninging</h3><br>
		- Added 5 layers<br>
		- Added achievements and help<br>`

let winText = `Congratulations! You have reached the current endgame, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(player.m.points.add(1))
	gain = gain.mul(player.p.points.pow(0.5).add(1))
	if (hasMilestone("u", 0) && !hasMilestone("u", 4)) gain = gain.pow(0.5).div(2)
	if (hasMilestone("u", 1)&& !hasMilestone("u", 4)) gain = gain.pow(0.75)
	if (hasMilestone("u", 2)&& !hasMilestone("u", 4)) gain = gain.pow(0.66).div(4)
	if (hasMilestone("u", 3)&& !hasMilestone("u", 4)) gain = gain.pow(0.5)
	if (inChallenge("u", 11)&& !hasMilestone("u", 4)) gain = gain.pow(1 / 3)
	if (hasChallenge("u", 11)&& !hasMilestone("u", 4)) gain = gain.pow(1.5).mul(2)
	if (hasChallenge("u", 11)&& hasMilestone("u", 4)) gain = gain.mul(3.375).mul(2)
	if (hasUpgrade("au", 15)&& !hasMilestone("u", 4)) gain = gain.pow(1.5)
	if (hasUpgrade("au", 15)&& hasMilestone("u", 4)) gain = gain.mul(new Decimal(5.0625))
	gain = gain.mul(new Decimal(1.1).add(1).pow(getBuyableAmount("p", 11)))
	gain = gain.mul(new Decimal(1.21).add(1).pow(getBuyableAmount("p", 12)))
	gain = gain.mul(new Decimal(1.331).add(1).pow(getBuyableAmount("p", 13)))
	
	if (player.u.points.gte(2)&& !hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e150), 0.55)
	if (player.u.points.gte(3)&& !hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e100), 0.25)
	if (player.u.points.gte(3)&& !hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e150), 0.5)
	if (!hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e100), 0.5)
	//I have no idea why I am doing this here
	if (hasUpgrade("au", 14)) buyUpgrade("m", 11)
	if (hasUpgrade("au", 14)) buyUpgrade("m", 12)
	if (hasUpgrade("au", 14)) buyUpgrade("m", 13)
	if (hasUpgrade("au", 14)) buyUpgrade("m", 21)
	if (hasUpgrade("au", 14)) buyUpgrade("m", 22)
	if (hasUpgrade("p", 23)) gain = gain.mul(new Decimal(400))
	if (hasUpgrade("p", 24)) gain = gain.mul(new Decimal(200))
	if (hasUpgrade("p", 25)) gain = gain.mul(new Decimal(300))
	if (hasUpgrade("au", 26)) autobuyUpgrades('p')
	if (getBuyableAmount("ma", 11).gte(1)) gain = gain.mul(getBuyableAmount("ma", 11))
	if (hasUpgrade("au", 26)) gain = gain.mul(upgradeEffect("au", 26))
	if (hasUpgrade("ma", 13)&& !hasMilestone("u", 4)) gain = gain.pow(2)
	if (hasUpgrade("ma", 13)&& hasMilestone("u", 4)) gain = gain.mul(16)
	if (player.u.points.gte(4)&& !hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e100), 0.5)
	if (player.u.points.gte(4)&& !hasMilestone("u", 4)) gain = softcap(gain, new Decimal(1e175), 0.25)
	if (hasMilestone("u", 0) && hasMilestone("u", 4)) gain = gain.pow(0.5).div(2)
	if (hasMilestone("u", 1)&& hasMilestone("u", 4)) gain = gain.pow(0.75)
	if (hasMilestone("u", 2)&& hasMilestone("u", 4)) gain = gain.pow(0.66).div(4)
	if (hasMilestone("u", 3)&& hasMilestone("u", 4)) gain = gain.pow(0.5)
	if (inChallenge("u", 11)&& hasMilestone("u", 4)) gain = gain.pow(1 / 3)
	if (hasMilestone('u', 4)) gain = gain.div(player.r.points.pow(getBuyableAmount('r', 11).add(1)))
	if (getClickableState("d", 11) == "NG+") {if (!gain.gte(0.5)) gain = new Decimal(0.5); gain = gain.pow(1.05)}
	if (getClickableState("d", 11) == "NG++") {if (!gain.gte(1)) gain = new Decimal(1); gain = gain.pow(1.1); gain = gain.mul(2)}
	if (getClickableState("d", 11) == "NG+++") {if (!gain.gte(5)) gain = new Decimal(2.5); gain = gain.pow(1.15); gain = gain.mul(3)}
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {multiplierGainPerSecond: new Decimal(0),
	
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.u.points.gte(6)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}