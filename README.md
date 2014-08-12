
Timeline with search for visualising journal entries from [jrnl](https://github.com/maebert/jrnl).

Demo available [here](http://fk128.github.io/jrnl-timeline/)

## Getting Started

to get a compiled version, clone the gh-pages branch
```
git clone -b gh-pages https://github.com/fk128/jrnl-timeline.git
```


## Obtaining JSON file from jrnl

Export single JSON file:

```
jrnl --export json -o entries.json
```

Here we named the file `entries.json` but you can name it whatever you want.

Place the file in `data` directory

```
data/entries.json
```

place a `info.json` file in `data` directory with the following content:

```
{
  "title": "My journal",
  "content_path": "data/entries.json"
}
```

change `title` to the desired name of your journal.

