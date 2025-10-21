// A side layer with achievements, with no prestige
addLayer("ach", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "achievements", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "Multiplication!",
            done() {return player.m.points.gte(1)}, // This one is a freebie
            tooltip: "Get your first multiplication point!", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        12: {
            name: "More multiplication!",
            done() {return player.m.points.gte(new Decimal("1e10"))}, // This one is a freebie
            tooltip: "Get 1e10 multiplication points!", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        13: {
            name: "Why is there such an upgrade!?",
            done() {return hasUpgrade("m", 22)}, // This one is a freebie
            tooltip() {if (!hasMilestone("u", 2)) return "Get multiplier upgrade 21."; else return "Get multiplier upgrade 22."}, // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        14: {
            name: "Hey, a universe!",
            done() {return player.u.points.gte(1)}, // This one is a freebie
            tooltip: "Get your first universe point.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        15: {
            name: "Huh, does it multiply points?",
            done() {return player.p.points.gte(5)}, // This one is a freebie
            tooltip: "Yes, it does. (Get 5 prestige points)", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        16: {
            name: "The easy way.",
            done() {return getClickableState("d", 11) == "NG+++"}, // This one is a freebie
            tooltip: "Set the difficulty to NG+++.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            },
            unlocked() {return hasAchievement(this.layer, this.id)}
        },
        21: {
            name: "A buyable?",
            done() {return hasUpgrade("p", 15)}, // This one is a freebie
            tooltip: "Unlock the first buyable.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        22: {
            name: "PERRY THE BUYABLE!?",
            done() {return hasUpgrade("p", 21)}, // This one is a freebie
            tooltip: "Unlock the second buyable.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        23: {
            name: "A second universe? Does that mean it's a multiverse?",
            done() {return player.u.points.gte(2)}, // This one is a freebie
            tooltip: "Get your second universe point.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        24: {
            name: "Challenge, done!",
            done() {return hasChallenge("u", 11)}, // This one is a freebie
            tooltip: "Finish the first universes challenge.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        25: {
            name: "Like the milestone text wall?",
            done() {return player.u.points.gte(3)}, // This one is a freebie
            tooltip: "Get your third universe point.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        31: {
            name: "Automation?",
            done() {return player.au.points.gte(1)}, // This one is a freebie
            tooltip: "Get an automation point.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        32: {
            name: "Automation!",
            done() {return hasUpgrade("au", 14)}, // This one is a freebie
            tooltip: "Buy automation upgrade 14.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        33: {
            name: "Not automation!",
            done() {return hasUpgrade("au", 21)}, // This one is a freebie
            tooltip: "Buy automation upgrade 21.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        34: {
            name: "A slight push!",
            done() {return hasUpgrade("p", 23)}, // This one is a freebie
            tooltip: "Buy prestige upgrade 23.", // Showed when the achievement is completed
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        35: {
            name: "A bit more!",
            done() {return hasUpgrade("p", 25)}, // This one is a freebie
            tooltip: "Buy prestige upgrade 25.", // Showed when the achievement is completed
        },
        41: {
            name: "Fourth universe!",
            done() {return player.u.points.gte(4)},
            tooltip: "Get your fourth universe point.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        42: {
            name: "Oh god, why is math in here?",
            done() {return player.ma.points.gte(1)},
            tooltip: "Get your first math point.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        43: {
            name: "This upgrade was joking!",
            done() {return hasUpgrade("ma", 11)},
            tooltip: "Get math upgrade 11.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        44: {
            name: "Are we going to wait a long time?",
            done() {return hasUpgrade("ma", 12)},
            tooltip: "Not really. (Get math upgrade 12)",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        45: {
            name: "Dynamic points!",
            done() {return hasUpgrade("au", 26)},
            tooltip: "Get automation upgrade 26.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        51: {
            name: "Oh. My. God.",
            done() {return hasMilestone("u", 4)},
            tooltip: "Get universe milestone 5.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        52: {
            name: "Welp, more waiting!",
            done() {return hasUpgrade("r", 11)},
            tooltip: "Get remover upgrade 11.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        53: {
            name: "Oooh, exponential!",
            done() {return hasUpgrade("r", 21)},
            tooltip: "Get remover upgrade 21.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        54: {
            name: "Uhhh... Are you sure it's a reset?",
            done() {return getBuyableAmount('r', 11).gte(1)},
            tooltip: "Perform the first remover prestige.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
        55: {
            name: "Why.",
            done() {return hasUpgrade("r", 25)},
            tooltip: "Get remover upgrade 25.",
            onComplete() {
                player[this.layer].points = player[this.layer].points.add(1)
            }
        },
    },
},
),

// A side layer with achievements, with no prestige
addLayer("d", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "lime",
    resource: "", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Difficulty")
    },
    clickables: {
        11: {
            title: "Switch difficulty",
            display() {return "Current difficulty: " + getClickableState(this.layer, this.id)},
            onClick() {
                switch (getClickableState(this.layer, this.id))
                {
                    case "Normal": 
                        player[this.layer].clickables[this.id] = "NG+"
                        break;
                    case "NG+":
                        player[this.layer].clickables[this.id] = "NG++"
                        break;
                    case "NG++":
                        player[this.layer].clickables[this.id] = "NG+++"
                        break;
                    default: 
                        player[this.layer].clickables[this.id] = "Normal"
                        break;
                }
            },
            canClick() {
                return true
            }
        }
    },
    tabFormat: {
        "Difficulty": {
            content: [
                ["display-text", function() {
                    text = ""
                    if (getClickableState(this.layer, 11) == "" || getClickableState(this.layer, 11) == "Normal") text = text + "<h2>The standard way to play the game.</h2><br>"
                    if (getClickableState(this.layer, 11) == "NG+") text = text + "<h2>The easier way to play the game.</h2><br><br><h3>Your points are <b>never lower</b> than 0.5.<br><br>Your point gain is <b>raised</b> by 1.05 after <b>all</b> effects.</h3><br>"
                    if (getClickableState(this.layer, 11) == "NG++") text = text + "<h2>The (almost) easiest way to play the game.</h2><br><br><h3>Your points are <b>never lower</b> than 1.<br><br>Your point gain is <b>raised</b> by 1.1 after <b>all</b> effects.<br><br>Your point gain is <b>multiplied</b> by 2 after everything.</h3>"
                    if (getClickableState(this.layer, 11) == "NG+++") text = text + "<h1>The easiest way to play the game.</h1><br><h5>WARNING! This makes the game end really fast and removes almost all fun!</h5><br><br><h3>Your points are <b>never lower</b> than 2.5.<br><br>Your point gain is <b>raised</b> by 1.15 after <b>all</b> effects.<br><br>Your point gain is <b>multiplied</b> by 3 after everything.<br><br>All layer resources gain is <b>multiplied</b> by 2.</h3>"
                    return text
                }],
                "blank",
                "h-line",
                "blank",
                ["clickable", 11],
            ]
        }
    }
},
),



addLayer("u", {
    symbol: "U",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#dddddd",
    resource: "universe points", 
    row: 5,
    requires() {if (!hasMilestone("u", 4)) return new Decimal("1e200"); else if (player.u.points.equals(5)) return new Decimal("1e13000"); else return new Decimal("1e50000");}, // Can be a function that takes requirement increases into account
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal",
    exponent: new Decimal(1e-100),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    layerShown(){return hasMilestone("u", 0) || hasUpgrade("m", 22)},
    milestones: {
        0: {
            requirementDescription: "First universe point",
            effectDescription: "Reset the universe, nerfing your point gain but unlocking something new.",
            tooltip() {if (!hasMilestone("u", 4)) return "Multiplier effect is square rooted and divided by two. Multiplier exponent is multiplied by 0.75. Unlock a new layer."; else return "Point gain is square rooted and divided by two. Multiplier exponent is multiplied by 0.75. Unlock a new layer."},
            done() { return player.u.points.gte(1) }
        },
        1: {
            requirementDescription: "Second universe point",
            effectDescription: "Reset the universe, nerfing your point gain but unlocking something new.",
            tooltip() {if (!hasMilestone("u", 4)) return "Multiplier and prestige point effect is raised by 0.75. Unlock a new challenge."; else return "Point gain is raised by 0.75. Unlock a new challenge."},
            done() { return player.u.points.gte(2) },
            unlocked() {return hasMilestone("u", 0)}
        },
        2: {
            requirementDescription: "Third universe point",
            effectDescription: "Reset the universe, nerfing your point gain again but unlocking something new.",
            tooltip: "Multiplier and prestige point effect is raised to 0.66 and is divided by 4. Unlock a new layer and new upgrades. Decrease the multiplier requirement. Add a few softcaps here and there.",
            done() { return player.u.points.gte(3) },
            unlocked() {return hasMilestone("u", 1)}
        },
        3: {
            requirementDescription: "Fourth universe point",
            effectDescription: "Reset the universe, nerfing your point gain again but unlocking something new.",
            tooltip: "Multiplier and prestige point effect is raised by 0.5. And uhh, disregard whatever was on the new prestige upgrades, it's now under a softcap. Unlock a new layer.",
            done() { return player.u.points.gte(4) },
            unlocked() {return hasMilestone("u", 2)}
        },
        4: {
            requirementDescription: "Fifth universe point",
            effectDescription: "Reset the universe, <b>buffing</b> your point gain again and making the dev's life hell.",
            tooltip: "Remove all softcaps, BUT all upgrades that raise point gain by something are replaced by multiply point gain by something^4. The universe milestone nerfs are now applied everywhere. The milestone exponent is multiplied by 0.4. Unlock a new layer.",
            done() { return player.u.points.gte(5) },
            unlocked() {return hasMilestone("u", 3)}
        },
    },
    challenges: {
        11: {
            name: "<br><h6>The timewall that happens at this point in the game because I had no idea what to do for this</h6>",
            challengeDescription: "Cube root the multiplier and prestige point effect.",
            canComplete: function() {return player.points.gte(100) && player.m.points.gte(50)},
            goalDescription: "Get 100 points and 50 multiplier points.",
            rewardDescription: "Raise the multiplier and prestige point effect by 1.5 and multiply it by 2.",
            unlocked() {return hasMilestone("u", 1)}
        },
    },
    tabFormat: {
        "Milestones": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "milestones",
            ],
        },
        "Challenges": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "challenges",
            ],
        },
    }
},
),

addLayer("au", {
    symbol: "Au",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#555555",
    resource: "automation points", 
    row: 5,
    requires: new Decimal("1e100"), // Can be a function that takes requirement increases into account
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal",
    exponent: new Decimal(2.5e-2),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("au", 11)) mult = mult.mul(2)
        if (hasUpgrade("au", 12)) mult = mult.mul(1.5)
        if (hasUpgrade("au", 15)) mult = mult.mul(2)
        if (hasUpgrade("au", 16)) mult = mult.mul(2)
        if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    layerShown(){return hasMilestone("u", 2)},
    
    buyables: {
        11: {
            cost(x) { return new Decimal(2).pow(x) },
            title: "Multiplier per second",
            display() { return "You are getting " + format(getBuyableAmount("au", 11).pow(2)) + "% of multiplier per second.\nCost:" +  format(new Decimal(2).pow(getBuyableAmount("au", 11)))},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.multiplierGainPerSecond = player.multiplierGainPerSecond.add(1)
            },
        }
    },
    infoboxes: {
        warning: {
            title: "Warning!",
            body: "Before you do the fourth universe reset, I recommend you to finish this layer first, since after that you'll lose the occasion to do so! I also don't recommend saving the points up, since you unlock a certain upgrade in the new layer that resets them... <h6>wink wink</h6>",
            unlocked() {return !hasMilestone("u", 3)}
        }
    },
    upgrades: {
        11: {
            title: "To",
            description() {if (!hasUpgrade("au", 22)) return "Multiply automation gain by 2."; else return "Do nothing."},
            cost: new Decimal(2)
        },
        12: {
            title: "automate,",
            description() {if (!hasUpgrade("au", 22)) return "Multiply automation gain by 1.5."; else return "Do nothing."},
            cost: new Decimal(5),
            unlocked() {return hasUpgrade("au", 11)}
        },
        13: {
            title: "or",
            description: "Get 25% of prestige per second.",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade("au", 12)}
        },
        14: {
            title: "not",
            description: "Automate the multiplier upgrades.",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade("au", 13)}
        },
        15: {
            title: "to",
            description() {if (!hasUpgrade("au", 22)) return "Multiply automation gain by 2 and raise point gain by 1.5."; else return "Raise point gain by 1.5."},
            cost: new Decimal(25),
            unlocked() {return hasUpgrade("au", 14)}
        },
        16: {
            title: "automate?",
            description() {if (!hasUpgrade("au", 22)) return "Multiply automation gain by 2 and multiply passive multiplier gain by 4. Autobuy max (and break) the prestige buyables."; else return "Multiply passive multiplier gain by 4. Autobuy max (and break) the prestige buyables."},
            description: "Multiply automation gain by 2 and multiply passive multiplier gain by 4. Autobuy max (and break) the prestige buyables.",
            cost: new Decimal(100),
            unlocked() {return hasUpgrade("au", 15)}
        },
        21: {
            title: "Isn't there supposed to be more automation?",
            description: "Unlock new prestige upgrades.",
            cost: new Decimal(400),
            unlocked() {return hasUpgrade("au", 16)}
        },
        22: {
            title: "Oh, hey, more automatio- wait a minute...",
            description: "Disable the ability to gain automation points, but get 1 automation point per second.",
            cost: new Decimal(0),
            unlocked() {return hasUpgrade("ma", 12)}
        },
        23: {
            title: "This is just a boring segment, isn't it!?",
            description: "Multiply automation point gain by 4 and math points reset nothing.",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade("au", 22)}
        },
        24: {
            title: "Wait, is that a...",
            description: "Multiply automation point gain by 2, autobuy math points.",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade("au", 23)}
        },
        25: {
            title: "DYNAMIC UPGRADE!?",
            description() {return "Multiply automation point gain based on automation point gain. Effect: " + format(upgradeEffect("au", 25))},
            cost: new Decimal(100),
            unlocked() {return hasUpgrade("au", 24)},
            tooltip: "Formula: log2(AU points + 1) + 1",
            effect() {
                return player.au.points.add(1).log2().add(1)
            }
        },
        26: {
            title: "Damn, that previous upgrade was suprising!",
            description() {return "Multiply automation point gain by 2 and multiply point gain based on automation points, plus automate prestige upgrades.\nEffect: " + format(upgradeEffect("au", 26))},
            cost: new Decimal(2000),
            tooltip: "Formula: (AU points + 1) ^ 1.5",
            effect() {
                return player.au.points.add(1).pow(1.5)
            },
            unlocked() {return hasUpgrade("au", 25)}
        }
    },
    canReset() {return !hasUpgrade("au", 22)},
    update(diff) {
        passiveGain = new Decimal(0)
        if (hasUpgrade("au", 22)) passiveGain = passiveGain.add(1)
        if (hasUpgrade("au", 23)) passiveGain = passiveGain.mul(4)
        if (hasUpgrade("au", 24)) passiveGain = passiveGain.mul(2)
        if (hasUpgrade("au", 25)) passiveGain = passiveGain.mul(upgradeEffect("au", 25))
        if (hasUpgrade("au", 26)) passiveGain = passiveGain.mul(2)
        if (getClickableState("d", 11) == "NG+++") passiveGain = passiveGain.mul(2)
        player.au.points = player.au.points.add(passiveGain.mul(diff))
    }
},
),

addLayer("m", {
    name: "multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#DC1313",
    requires() {if (hasMilestone("u", 2)) return new Decimal(1); return new Decimal(10)}, // Can be a function that takes requirement increases into account
    resource: "multiplier points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    effectDescription() {
        pointBuff = player.m.points.add(1)
        if (hasMilestone("u", 0)) {pointBuff = pointBuff.pow(0.5)}
        if (hasMilestone("u", 1)) pointBuff = pointBuff.pow(0.75)
        if (hasMilestone("u", 2)) pointBuff = pointBuff.pow(0.66).div(4)
        if (hasMilestone("u", 3)) pointBuff = pointBuff.pow(0.5)
        if (inChallenge("u", 11)) pointBuff = pointBuff.pow(1 / 3)
        if (hasChallenge("u", 11)) pointBuff = pointBuff.pow(1.5).mul(2)
        if (hasUpgrade("au", 15)) pointBuff = pointBuff.pow(1.5)
        return "which multiplies point gain by " + format(pointBuff)
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("m", 11)) mult = mult.mul(3)
        if (hasUpgrade("m", 12)) mult = mult.mul(9)
        if (hasUpgrade("m", 13)) mult = mult.mul(81)
        if (hasUpgrade("p", 11)) mult = mult.mul(1.5)
        if (hasUpgrade("p", 12)) mult = mult.mul(1.5)
        if (hasUpgrade("p", 13)) mult = mult.mul(1.5)
        if (hasUpgrade("p", 14)) mult = mult.mul(1.25)
        mult = mult.mul(new Decimal(1.25).add(1).pow(getBuyableAmount("p", 11)))
        mult = mult.mul(new Decimal(1.5).add(1).pow(getBuyableAmount("p", 12)))
        mult = mult.mul(new Decimal(1.75).add(1).pow(getBuyableAmount("p", 13)))
        mult = mult.mul(player.p.points.add(1))
        mult = mult.mul(buyableEffect("ma", 11))
        if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasMilestone("u", 0)) exp = exp.mul(0.75)
        if (hasUpgrade("m", 21)) exp = exp.mul(1.25)
        if (hasUpgrade("m", 22)) exp = exp.mul(1.5)
        if (hasUpgrade("p", 25)) exp = exp.mul(1.05)
        if (hasMilestone('u', 4)) exp = exp.mul(0.4)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for multiplication points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Multiplication of multiplication",
            description: "Multiply multiplication points by 3.",
            cost: new Decimal(100),
        },
        12: {
            title: "Multiplication^3",
            description: 'Multiply multiplication gain by 9',
            cost: new Decimal(5000)
        },
        13: {
            title: "(Multiplication of multiplication) ^2",
            description: "Multiply multiplication points by 81.",
            cost: new Decimal(1e10),
        },
        21: {
            title: "Multiplication^(&infin; / 2)",
            description: "You will absolutely need this now.",
            tooltip: "Multiplication exponent * 1.25",
            cost: new Decimal(1e50),
            unlocked() {return hasUpgrade("m", 13) && hasMilestone("u", 2)}
        },
        22: {
            title: "Multiplication^&infin;",
            description: "Obliterate the point balance.",
            tooltip: "Multiplication exponent * 1.5",
            cost: new Decimal(1e70),
            unlocked() {return hasUpgrade("m", 13)}
        }
    },
    layerShown(){return true},
    passiveGeneration() {
        gain = new Decimal(1)
        if (hasUpgrade("au", 16)) gain = gain.mul(4)
        return player.multiplierGainPerSecond.pow(2).div(100).mul(gain)
    }
})

addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4B13DC",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "multiplier points", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    effectDescription() {
        pointBuff = player.p.points.pow(0.5).add(1)
        multiplierBuff = player.p.points.add(1)
        if (hasMilestone("u", 0)) {pointBuff = pointBuff.pow(0.5).div(2)}
        if (hasMilestone("u", 1)) pointBuff = pointBuff.pow(0.75)
        if (hasMilestone("u", 2)) pointBuff = pointBuff.pow(0.66).div(4)
        if (hasMilestone("u", 3)) pointBuff = pointBuff.pow(0.5)
        if (inChallenge("u", 11)) pointBuff = pointBuff.pow(1 / 3)
        if (hasChallenge("u", 11)) pointBuff = pointBuff.pow(1.5).mul(2)
        if (hasUpgrade("au", 15)) pointBuff = pointBuff.pow(1.5)
        return "which multiplies point gain by " + format(pointBuff) + " and multiplier gain by " + format(multiplierBuff)
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect("ma", 11))
        if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    buyables: {
        11: {
            title: "Maybe this will help...",
            cost(x) { return x.pow(1.5) },
            display() { return "Multiply point gain by 2.1 and multiplier gain by 1.25 per buyable amount.\nAmount: " + getBuyableAmount("p", 11) + "/256\nCost: " + format(getBuyableAmount("p", 11).add(1).pow(1.5)) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                //ChatGPT helped me make this, please don't hate me
                let amt = getBuyableAmount(this.layer, this.id);
                let res = player.points;
            
                let a = amt.toNumber();
                let R = res.toNumber();
            
                // Solve approximate max affordable
                let max = Math.floor(Math.pow(Math.pow(a, 2.5) + 2.5 * R, 1/2.5));
                max = new Decimal(max);
            
                // Respect purchase limit if defined
                let limit = this.purchaseLimit ? this.purchaseLimit : new Decimal(Infinity);
                if (max.gt(limit)) max = limit;
            
                if (max.gt(amt)) {
                    // Total cost approximation
                    let costSpent = new Decimal(0.4).times(max.pow(2.5).sub(amt.pow(2.5)));
                    player.points = player.points.sub(costSpent).max(0);
                    setBuyableAmount(this.layer, this.id, max);
                }
            },
            
            purchaseLimit: new Decimal(256),
            unlocked() {return hasUpgrade("p", 15)},
        },
        12: {
            title: "This will surely help!",
            cost(x) { return x.add(1).pow(10) },
            display() { return "Multiply point gain by 2.21 and multiplier gain by 1.5 per buyable amount.\nAmount: " + getBuyableAmount("p", 12) + "/100\nCost: " + format(getBuyableAmount("p", 12).add(1).pow(10)) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            
            purchaseLimit: new Decimal(100),
            unlocked() {return hasUpgrade("p", 21)},
            buyMax() {
                let amt = getBuyableAmount(this.layer, this.id);
                let res = player.points;
            
                let a = amt.toNumber();
                let R = res.toNumber();
            
                // Inverse:
                // R >= ((b+1)^11 - (a+1)^11) / 11
                let b = Math.floor(Math.pow((a+1) ** 11 + 11 * R, 1/11) - 1);
            
                b = new Decimal(b);
            
                let limit = this.purchaseLimit ? this.purchaseLimit : new Decimal(Infinity);
                if (b.gt(limit)) b = limit;
            
                if (b.gt(amt)) {
                    let costSpent = new Decimal(((b.add(1)).pow(11).sub((amt.add(1)).pow(11))).div(11));
                    player.points = player.points.sub(costSpent).max(0);
                    setBuyableAmount(this.layer, this.id, b);
                }
            },            
        },
        13: {
            title: "I need help again.",
            cost(x) {a = new Decimal(2); return a.pow(x) },
            display() { return "Multiply point gain by 2.331 and multiplier gain by 1.75 per buyable amount.\nAmount: " + getBuyableAmount("p", 13) + "/500\nCost: " + format(new Decimal(2).pow(getBuyableAmount("p", 13))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(500),
            unlocked() {return hasUpgrade("p", 22)},
            buyMax() {
                let amt = getBuyableAmount(this.layer, this.id);
                let res = player.points;
            
                if (res.lte(0)) return;
            
                let twoToA = Decimal.pow(2, amt);
                let max = res.add(twoToA).log(2).floor(); // b = log2(R + 2^a)
            
                // Respect purchase limit
                let limit = this.purchaseLimit ? this.purchaseLimit : new Decimal(Infinity);
                if (max.gt(limit)) max = limit;
            
                if (max.gt(amt)) {
                    setBuyableAmount(this.layer, this.id, max);
                    if (player.points > new Decimal(1e150)) setBuyableAmount(this.layer, this.id, new Decimal(500))
                    // Optional: subtract exact cost if you want leftover points
                }
            },
        },
    },
    upgrades: {
        11: {
            title: "...",
            description: "Multiply multiplication points by 1.5.",
            cost: new Decimal(1),
        },
        12: {
            title: "What...",
            description: "Multiply multiplication points by 1.5.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade("p", 11)}
        },
        13: {
            title: "...happened?",
            description: "Multiply multiplication points by 1.5.",
            cost: new Decimal(4),
            unlocked() {return hasUpgrade("p", 12)}
        },
        14: {
            title: "Why am I so weak?",
            description: "Multiply multiplication points by 1.25.",
            cost: new Decimal(8),
            unlocked() {return hasUpgrade("p", 13)}
        },
        15: {
            title: "Maybe I can...",
            description: "Unlock a buyable.",
            cost: new Decimal(16),
            unlocked() {return hasUpgrade("p", 14)}
        },
        21: {
            title: "I need more power!",
            description: "Unlock another buyable.",
            cost: new Decimal(1000000),
            unlocked() {return getBuyableAmount("p", 11).equals(new Decimal(256)) && hasMilestone("u", 1)}
        },
        22: {
            title: "MORE!",
            description: "Unlock another buyable.",
            cost: new Decimal(1000000),
            unlocked() {return getBuyableAmount("p", 12).equals(new Decimal(100)) && hasMilestone("u", 2)}
        },
        23: {
            title: "A bit more?",
            description: "Multiply point gain by 400 after softcaps.",
            cost: new Decimal("1e1270"),
            unlocked() {return hasUpgrade("au", 21) && hasUpgrade("p", 22)}
        },
        24: {
            title: "A little bit more?",
            description: "Multiply point gain by 200 after softcaps.",
            cost: new Decimal("1e1275"),
            unlocked() {return hasUpgrade("au", 21) && hasUpgrade("p", 23)}
        },
        25: {
            title: "Yep, just a biiiit more.",
            description: "Multiply point gain by 300 after softcaps, and multiply the exponent of multiplier by 1.1",
            cost: new Decimal("1e1280"),
            unlocked() {return hasUpgrade("au", 21) && hasUpgrade("p", 24)}
        },
    },
    layerShown(){return hasMilestone("u", 0)},
    passiveGeneration() {
        if (hasUpgrade("au", 13)) return new Decimal(0.25)
        return new Decimal(0)
    },
    branches: ['ma', 'm'],
    update(diff) {
        if (hasUpgrade("au", 16)) {
            buyMaxBuyable("p", 11)
            buyMaxBuyable("p", 12)
            buyMaxBuyable("p", 13)
        }
    },
    
}),

addLayer("ma", {
    name: "math", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "green",
    requires: new Decimal("1e1140"), // Can be a function that takes requirement increases into account
    resource: "math points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: new Decimal(1.25), // Prestige currency exponent
    base: new Decimal(3.5),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for math points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    canBuyMax() {return hasUpgrade("ma", 14)},
    buyables: {
        11: {
            title: "Fibonacci",
            cost(x) { return x },
            display() {
                amount = "20"
                if (hasUpgrade("ma", 14)) amount = "100"
                return "Multiply gain of all layers below by " + format(buyableEffect(this.layer, 11)) + ", and point gain by " + format(getBuyableAmount("ma", 11)) + "\nAmount: " + getBuyableAmount("ma", 11) + "/" + amount +  "\nCost: " + format(getBuyableAmount("ma", 11)) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect(x) {
                sqrt5 = Decimal.sqrt(5);
                phi = Decimal.add(1, sqrt5).div(2);
                psi = Decimal.sub(1, sqrt5).div(2);
                phi_n = Decimal.pow(phi, x.add(2));
                psi_n = Decimal.pow(psi, x.add(2));
                result = Decimal.sub(phi_n, psi_n).div(sqrt5);
                result = result.round()
                if (hasUpgrade("ma", 11)) result = result.pow(2)
                    if (hasUpgrade("ma", 14)) result = result.pow(8)
                return result;
            },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {if (hasUpgrade("ma", 14)) return new Decimal(100); else return new Decimal(20)},
            tooltip: "This buyable does not take your math points when buying!"
        },
    },
    upgrades: {
        11: {
            title: "A bit more math, please!",
            description: "Square the fibonacci buyable effect.",
            cost: new Decimal(8),
        },
        12:
        {
            title: "Yeah, we need automation.",
            description: "Unlock new automation upgrades, BUT reset your automation points.",
            cost: new Decimal(10),
            onPurchase() {player.au.points = new Decimal(0)
                player.ma.points = player.ma.points.add(10)
            },
            tooltip: "Only this time, the upgrade does NOT take your hard earned points! What a revolution, everybody!"
        },
        13: {
            title: "Ok.",
            description: "Point gain is squared.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade("au", 26)}
        },
        14: {
            title: "Huh.",
            description: "Unlock the ability to buy max math points. Increase the fibonacci buyable cap by 80 and raise its power by 8.",
            cost: new Decimal(215),
            unlocked() {return hasUpgrade("ma", 13)}
        },
    },
    resetsNothing() {return hasUpgrade("au", 23)},
    autoPrestige() {return hasUpgrade("au", 24)},
    layerShown() {return hasMilestone("u", 3)}
}),

addLayer("r", {
    name: "remover", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1000000),
        base: new Decimal(1000000),
        increase: new Decimal(1)
    }},
    color: "yellow",
    requires: new Decimal("1e1140"), // Can be a function that takes requirement increases into account
    resource: "remover points", // Name of prestige currency
    baseResource: "multiplier points", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: new Decimal(1.25), // Prestige currency exponent
    base: new Decimal(3.5),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
        return mult
    },
    effectDescription() {return "which divides point gain by " + format(player.r.points.pow(getBuyableAmount(this.layer, 11).add(1))) + " after all nerfs."},
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    infoboxes: {
        help: {
            title: "The waiting layer",
            body: "Hey, you're in this layer already? That's cool. So, in this layer you start with 1 million points. Upgrades, buyables and everything else that normally takes your points instead makes points go back to 1 million, and upgrades in here instead require the points to be equal or less to the cost."
        }
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    buyables: {
        11: {
            title: "The prestige mechanic",
            display() {
                text = ""
                if (getBuyableAmount(this.layer, this.id).gte(100)) text = "<h6>Whoops! I'm sorry, but this is getting out of hand. You now can't perform more remover prestiges!"
                return "Increase the remover points you begin with by times 10, but unlock something new.<br>Amount: " + getBuyableAmount(this.layer, this.id) + "<br>Current increase: " + player.r.increase + "<br>" + text},
            buy() {
                player.r.increase = player.r.increase.mul(10)
                player.r.points = player.r.base.mul(player.r.increase)
                addBuyables(this.layer, this.id, 1)
            },
            canAfford() {
                return player.r.points.lte(new Decimal(0.1).div(player.r.increase))
            },
            purchaseLimit() {if (!hasUpgrade('r', 35)) return new Decimal(100); else return new Decimal(105)},
            tooltip: "Each reset decreases the minimal point amount by 10^(reset amount + 1), and raises the debuff by reset amount + 1."
        }
    },
    upgrades: {
        11: {
            title: "The beginning",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Begin removing 0.1 remover points per second.<br><br>Requires: 1000000 remover points"},
            canAfford() {return player.r.points.lte(1000000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        12: {
            title: "Quicker loss",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Multiply remover loss by 3.<br><br>Requires: 999998 remover points"},
            canAfford() {return player.r.points.lte(999998)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        13: {
            title: "Even quicker loss",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Multiply remover loss by 5.<br><br>Requires: 999995 remover points"},
            canAfford() {return player.r.points.lte(999995)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        14: {
            title: "Even more quicker loss",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Multiply remover loss by 10.<br><br>Requires: 999950 remover points"},
            canAfford() {return player.r.points.lte(999950)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        15: {
            title: "The quickest loss",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Multiply remover loss by 20.<br><br>Requires: 999750 remover points"},
            canAfford() {return player.r.points.lte(999750)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        21: {
            title: "Exponential loss?",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Raise remover loss by 1.25.<br><br>Requires: 995000 remover points"},
            canAfford() {return player.r.points.lte(995000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        22: {
            title: "More exponential loss!?",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Raise remover loss by 1.2.<br><br>Requires: 950000 remover points"},
            canAfford() {return player.r.points.lte(950000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        23: {
            title: "MORE exponential loss!?",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Raise remover loss by 1.4.<br><br>Requires: 900000 remover points"},
            canAfford() {return player.r.points.lte(900000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)}
        },
        24: {
            title: "EVEN MORE (but not needed) exponential loss!?",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Raise remover loss by 1.25.<br><br>Requires: 95000000 remover points"},
            canAfford() {return player.r.points.lte(95000000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(2)}
        },
        25: {
            title: "Why.",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Raise remover loss by 1.5.<br><br>Requires: 900000000 remover points"},
            canAfford() {return player.r.points.lte(900000000)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(3)}
        },
        31: {
            title: "NO.",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Tetrate the remover loss by 1.01.<br><br>Requires: 9e11 remover points"},
            canAfford() {return player.r.points.lte(9e11)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(5)}
        },
        32: {
            title: "STOP.",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Tetrate the remover loss by 1.01.<br><br>Requires: 9.5e14 remover points"},
            canAfford() {return player.r.points.lte(9.5e14)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(7)}
        },
        33: {
            title: "I SAID STOP.",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Tetrate the remover loss by 1.02.<br><br>Requires: 9.5e17 remover points"},
            canAfford() {return player.r.points.lte(9.5e17)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(12)}
        },
        34: {
            title: "WHY WON'T YOU LISTEN?",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>Tetrate the remover loss by 1.03.<br><br>Requires: 9e35 remover points"},
            canAfford() {return player.r.points.lte(9e35)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(30)}
        },
        35: {
            title: "Okay, fine.",
            fullDisplay() {return "<h3>" + this.title + "</h3><br>I'll let you do 5 final prestiges.<br><br>Requires: 1 remover points"},
            canAfford() {return player.r.points.lte(1)},
            pay() {player.r.points = player.r.base.mul(player.r.increase)},
            unlocked() {return getBuyableAmount(this.layer, 11).gte(100)}
        },
    },
    branches: ['m'],
    update(diff) {
        if (this.unlocked())
        {
            mult = new Decimal(0)
            if (hasUpgrade("r", 11)) mult = mult.add(0.1)
            if (getClickableState("d", 11) == "NG+++") mult = mult.mul(2)
            if (hasUpgrade("r", 12)) mult = mult.mul(3)
            if (hasUpgrade("r", 13)) mult = mult.mul(5)
            if (hasUpgrade("r", 14)) mult = mult.mul(10)
            if (hasUpgrade("r", 15)) mult = mult.mul(20)
            if (hasUpgrade("r", 21)) mult = mult.pow(1.25)
            if (hasUpgrade("r", 22)) mult = mult.pow(1.2)
            if (hasUpgrade("r", 23)) mult = mult.pow(1.4)
            if (hasUpgrade("r", 24)) mult = mult.pow(1.25)
            if (hasUpgrade("r", 25)) mult = mult.pow(1.5)
            if (hasUpgrade("r", 31)) mult = mult.tetrate(1.01)
            if (hasUpgrade("r", 32)) mult = mult.tetrate(1.01)
            if (hasUpgrade("r", 33)) mult = mult.tetrate(1.02)
            if (hasUpgrade("r", 34)) mult = mult.tetrate(1.03)
            player.r.points = player.r.points.sub(mult.mul(diff))
        if (player.r.points.lte(new Decimal(0.1).div(player.r.increase))) player.r.points = new Decimal(0.1).div(player.r.increase)
        }
    },
    unlocked() {return hasMilestone("u", 4)},
    tabFormat: [
        ["infobox", "help"],
        ["main-display", new Decimal(2)],
        "blank",
        "upgrades",
        "buyables"
    ],
    unlocked() {return hasMilestone('u', 4)}
})