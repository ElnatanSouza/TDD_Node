const bcrypt = require('bcryptjs');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('Should encrypt user password', async () => {
    const user = await User.create({
      name: "Elnatan",
      email: "elnatan.souzas@gmail.com",
      password: "1234567"
    })

    const hash = await bcrypt.hash('1234567', 8);
    const compareHash = await bcrypt.compare('1234567', user.password_hash);

    expect(compareHash).toBe(true);
  })
})