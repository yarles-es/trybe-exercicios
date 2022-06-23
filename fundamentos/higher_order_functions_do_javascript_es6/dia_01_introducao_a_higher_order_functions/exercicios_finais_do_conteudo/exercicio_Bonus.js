const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const damageDragon = (dragon) => {
    const minDamage = 15;
    const dragonDmg = minDamage + Math.floor((Math.random() * (dragon.strength - minDamage + 1)));
    return dragonDmg;
  }

  const damageWarrior = (warrior) => {
    const minDamage = warrior.strength;
    const maxDamage = minDamage * warrior.weaponDmg;
    const warriorDmg = minDamage + Math.floor(Math.random() * ((maxDamage - minDamage + 1)));
    return warriorDmg;
  }

  const manaDamageMage = (mage) => {
    const minDamage = mage.intelligence;
    const maxDamage = minDamage * 2;
    const mageMana = mage.mana;
    let manaUsed = 0;
    if (mageMana > 15){
      const mageDmg = minDamage + Math.floor(Math.random() * (maxDamage - minDamage + 1));
      manaUsed = 15;
    return { Damage: mageDmg, ManaUsed: manaUsed };
    } else {
        return { Damage:`Não possui mana suficiente`, ManaUsed: 0};
    }
  };
  
  const battleMembers = { mage, warrior, dragon };


  


