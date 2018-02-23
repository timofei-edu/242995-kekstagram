const assert = require(`assert`);
const isURL = require(`is-url`);

const generator = require(`../src/generator`);
const generatedData = generator.generateEntity();

describe(`Check url`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`url`));
  });

  it(`should be an url type`, function () {
    assert.ok(isURL(generatedData.url));
  });
});

describe(`Check scale`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`scale`));
  });

  it(`should be a number type`, function () {
    assert.ok(typeof generatedData.scale === `number`);
  });

  it(`should gte MIN_SCALE (${generator.MIN_SCALE}) && lte MAX_SCALE (${generator.MAX_SCALE})`, function () {
    assert.ok(generatedData.scale >= generator.MIN_SCALE && generatedData.scale <= generator.MAX_SCALE);
  });
});

describe(`Check effect`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`effect`));
  });

  it(`should be a string type`, function () {
    assert.ok(typeof generatedData.effect === `string`);
  });

  it(`should equal generator.EFFECTS`, function () {
    assert.ok(generator.EFFECTS.indexOf(generatedData.effect) !== -1);
  });
});

describe(`Check hashtags`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`hashtags`));
  });

  it(`should be an array type`, function () {
    assert.ok(Array.isArray(generatedData.hashtags));
  });

  it(`should lte 5 elems`, function () {
    assert.ok(generatedData.hashtags.length <= 5);
  });

  it(`should have (ONLY) string elems`, function () {
    generatedData.hashtags.map((value) => {
      assert.ok(typeof value === `string`);
    });
  });

  it(`should have strings starts with #`, function () {
    generatedData.hashtags.map((value) => {
      assert.ok(value.startsWith(`#`));
    });
  });

  it(`should have not backspaces`, function () {
    generatedData.hashtags.map((value) => {
      assert.ok(!value.includes(` `));
    });
  });

  it(`should have unique string elems`, function () {
    generatedData.hashtags.map((value, index) => {
      assert.ok(generatedData.hashtags.indexOf(value) === index);
    });
  });

  it(`should lte 20 length of string elems`, function () {
    generatedData.hashtags.map((value) => {
      assert.ok(value.length <= 20);
    });
  });
});

describe(`Check description`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`description`));
  });

  it(`should be a string type`, function () {
    assert.ok(typeof generatedData.description === `string`);
  });

  it(`should lte 140 length`, function () {
    assert.ok(generatedData.description.length <= 140);
  });
});

describe(`Check likes`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`likes`));
  });

  it(`should be a number type`, function () {
    assert.ok(typeof generatedData.likes === `number`);
  });

  it(`should gte MIN_LIKES (${generator.MIN_LIKES}) && lte MAX_LIKES (${generator.MAX_LIKES})`, function () {
    assert.ok(generatedData.likes >= generator.MIN_LIKES && generatedData.likes <= generator.MAX_LIKES);
  });
});

describe(`Check comments`, function () {
  it(`should exist`, function () {
    assert.ok(generatedData.hasOwnProperty(`comments`));
  });

  it(`should be an array type`, function () {
    assert.ok(Array.isArray(generatedData.comments));
  });

  it(`should have (ONLY) string elems`, function () {
    generatedData.comments.map((value) => {
      assert.ok(typeof value === `string`);
    });
  });

  it(`should lte 140 length of string elems`, function () {
    generatedData.comments.map((value) => {
      assert.ok(value.length <= 140);
    });
  });
});

