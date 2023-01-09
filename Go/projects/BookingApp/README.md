shows how a user (Alice) sends some funds to another user (Bob): Alice uses her private key to sign a message saying “I want to send 1 bitcoin
to 1gr6U6...” that she sends to the network. Note that Alice does not identify the user she wants to send funds to, just the address to receive the funds. Thus Alice must find out Bob’s address through other means. Upon receiving Alice’s message, nodes in the network follow these steps:

- They verify that the signature is correct. If it is not they reject the message.

- They check that the sending address has enough funds to honor the transaction. If there are not enough funds credited to the address, the transaction is considered invalid.

- Finally, they update the database, subtracting the funds from one address and crediting them to the other.

An important detail is that nodes in the network do not know the identities of either Alice or Bob, as users are identified only by their addresses

by a pseudonym: Bitcoin provides **pseudonymity**. Another important detail is that addresses are not granted by the network. They are created inside the users’ devices when it runs the Bitcoin software that generates the **cryptographic public and private keys**. As the public and private keys are intimately related

# funny part About Bitcoin

No prior registration is necessary to use Bitcoin. In fact, new users do not even have to communicate their addresses to the network to be able to receive funds. A user, say Bob, can generate an address and communicate this address to Alice through other means, such as an email or the pairing of two smartphones. Alice can now send funds to Bob’s address and the network would accept the transaction even though it has never encountered that address before.

# consensus
is secured applying large amounts of computational power. This computational power serves the purpose of providing protection against attacks and is rewarded with the issuance of new bitcoins. The protocol encodes a schedule of new bitcoin creation, and all the newly created bitcoins are distributed among those who secure the blockchain,
called miners. 

Miners compete to create blocks of transactions that are appended to the blockchain. A miner who creates one of these blocks is granted the block reward, consisting of a certain number of newly minted bitcoins. 

A native currency is essential to the design of Bitcoin, as the issuance of new currency is used to pay for the cost of securing the distributed ledger

# Bitcoin’s distributed database is called the blockchain. 
Transactions are grouped in blocks of transactions roughly every 10 minutes. These blocks of transactions are then recorded one after the other in a chain of blocks, hence the name blockchain. 

This may seem a strange way to record information, compared to, say, a regular relational database.

The blockchain was designed to be resilient in the presence of attackers in the network.

Blocks are linked to create a record of the history of transactions that cannot be altered.

The link between blocks is a cryptographic link that cannot be forged unless the attacker has vast computational resources at her disposa

# Aside from the blockchain, nodes keep an additional database called the Unspent Transaction Outputs cache (UTXO)

The **UTXO** is a ledger that records the funds available for every address, in essence working as a cache for the blockchain.
As new transactions come, the UTXO is updated: funds from the sending addresses are subtracted and added to the receiving addresses. The UTXO is more similar to the central databases at the heart of most centralized systems.

# Bitcoin as a distributed ledger

# bitcoin
principle Bitcoin could serve as money as it satisfies the technical properties of
money: 
- it is durable, 
- divisible,
- fungible, 
- easy to transport, 
- and impossible to counterfeit.

# Modern mainstream economists (Mankiw, 2003) usually assign money three functions:
- **Medium of exchange**. Money can be exchanged for goods and services.
- **Store of value**. Money can be used to transfer purchasing power from the present to the future.
- **Unit of account**. Goods and services are quoted in terms of the money unit