import purserSoftware from '@colony/purser-software';
// import purserLedger from '@colony/purser-ledger';
import purserMetamask from '@colony/purser-metamask';
import purserTrezor from '@colony/purser-trezor';

const log = (...messages) => console.log('[PURSER]', ...messages);

const purserSoftwareWalletTest = async () => {
  const wallet = await purserSoftware.create();
  log(`software wallet address: ${wallet.address}`);
  log('software wallet object instace', wallet);
};

const purserMetamaskWalletTest = async () => {
  const wallet = await purserMetamask.open();
  log(`metamask wallet address: ${wallet.address}`);
  log('metamask wallet object instace', wallet);
};

const purserTrezorWalletTest = async () => {
  const wallet = await purserTrezor.open();
  log(`trezor wallet address: ${wallet.address}`);
  log('trezor wallet object instace', wallet);
};

const init = () => {
  purserSoftwareWalletTest();
  // purserMetamaskWalletTest()
  purserTrezorWalletTest();
};

export default init;
