import React from "react"
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete"

class AddressAutoCompleteInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: "" }
  }
  handleChange = (address) => {
    this.setState({ address })
  }
  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => console.log(results))
      .catch((error) => console.error("Error", error))
  }
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <label>{this.props.label}</label>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item"
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span className="form-control">
                      {suggestion.description}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}
export default AddressAutoCompleteInput
