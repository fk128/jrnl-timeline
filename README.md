
Timeline with search for visualising journal entries exported from [jrnl](https://github.com/maebert/jrnl).

Demo available [here](http://fk128.github.io/jrnl-timeline/).

## Getting Started

to get a compiled version, clone the gh-pages branch
```
git clone -b gh-pages https://github.com/fk128/jrnl-timeline.git
```

and place the files on your server.

## Obtaining JSON file from jrnl

Export single JSON file (more details at [jrnl documentation](https://maebert.github.io/jrnl/export.html)):

```
jrnl --export json -o entries.json
```

here we named the file `entries.json` but you can name it whatever you want.

Place the file in `data` directory:

```
data/entries.json
```

Also in `data` directory, you will find a file called `info.json` with the following content:

```
{
  "title": "My journal",
  "content_path": "data/entries.json"
}
```

change `title` to the desired name of your journal and `content_path` to the name of `.json` exported from jrnl.


## Developers

1. Clone the repository `git clone https://github.com/fk128/jrnl-timeline.git`.
2. `cd` into the directory.
3. Install node modules by running `npm install`.
4. Install packages by running `bower install`.
5. Run `grunt` to generate the optimised version. The output will be in the `dist` directory.

## Acknowledgement

- The theme for the timeline is originally based on [vertical-timeline](https://github.com/CodyHouse/vertical-timeline) by [CodyHouse](https://github.com/CodyHouse).

