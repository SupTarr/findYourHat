# Find Your Hat

## About The Project

In this project, you’ll be building an *interactive terminal game*. The scenario is that the player has lost their hat in a field full of **holes**, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

### Index of Default Map

|**R/C**| **0**  | **1**  | **2**  |
|:-----:|:------:|:------:|:------:|
| **0** | 00     | 01     | 02     |
| **1** | 10     | 11     | 12     |
| **2** | 20     | 21     | 22     |

### Default Map For Testing

|**R/C**| **0**  | **1**  | **2**  |
|:-----:|:------:|:------:|:------:|
| **0** | *      | ░      | O      |
| **1** | ░      | O      | ░      |
| **2** | ░      | ^      | ░      |

* ``*`` = Player
* ``░``  = Path
* ``^``  = Hat

## Technologies

This project was created with:

* JavaScript Classes
* JavaScript Conditional Statements

## Installation

### Run Locally

Clone the project

```sh
git clone https://github.com/SupTarr/findYourHat.git
```

Play on default map

```sh
node mapDefault.js
```

Play on generated Map

```sh
node mapGenerate.js
```
