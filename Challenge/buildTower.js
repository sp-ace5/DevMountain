function buildTower(floors) {
    const tower = [];
    for (let i = 1; i <= floors; i++) {
      const numBlocks = 2 * i - 1;
      const blocks = '*'.repeat(numBlocks);
      const spaces = ' '.repeat(floors - i);
      tower.push(spaces + blocks + spaces);
    }
    return tower;
  }

const tower = buildTower(30);
console.log(tower);