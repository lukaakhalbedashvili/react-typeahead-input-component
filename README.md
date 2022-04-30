# react-typeahead-input-component

Demo

https://user-images.githubusercontent.com/78295585/166108978-58251611-73af-4d49-ad98-d135d239039a.mp4

# Installation

```bash
npm i react-typeahead-input-component
```

## Usage

```javascript
import Search from "react-typeahead-input-component";
```

##api

| Props       | Type     | Default      | Description                                         |
| ----------- | -------- | ------------ | --------------------------------------------------- |
| value       | string   | **Required** | the value of input                                  |
| placeholder | string   | ""           | placeholder of input                                |
| loading     | boolean  | false        | determines visibility of loading animation          |
| results     | array    | []           | results array of your search query response objects |
| onClick     | function | () => {}     | callback function for onChange event                |

_onClick_ property takes function and passes _results_ and _payload_ object as a parameter to your function.

## results object structure

| properties | Type   | Default      | Description                                    |
| ---------- | ------ | ------------ | ---------------------------------------------- |
| img        | string | ""           | the link to the img source                     |
| title      | string | **Required** | the title of the result                        |
| subtitle   | string | **Required** | the subtitle of the result                     |
| payload    | any    | ""           | anything that will help you handle click event |

_payload_ property is the payload that you can use to handle click event. it could be anything you want. e.g _id_, _name_, _email_ etc.

## Example

```javascript
import Search from "react-typeahead-input-component";

const App = () => {
  const results = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=9bc9d965-164c-4b82-a6a3-9f735f419d2b",
      title: "Vaja",
      subTitle: "Name",
      redirectUrl: "https://www.google.com",
    },
  ];
  return (
    <div className="App">
      <Search
        placeholder="Search"
        value="Georgia"
        results={results}
        onClick={(result) => console.log(result)}
      />
    </div>
  );
};
export default App;
```
