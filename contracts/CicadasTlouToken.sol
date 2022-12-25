// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CicadasTlouToken is ERC20 {
    constructor() ERC20("CICTT", "Cicadas TLOU Token") {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }
}
