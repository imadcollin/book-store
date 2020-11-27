import React, { Component } from "react";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

export default class DeliveryRegions extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;

    return (
      <div>
        <CountryDropdown
          style={{ padding: "6px", border: "1px solid #ced4da" }}
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        <RegionDropdown
          style={{ padding: "6px", border: "1px solid #ced4da" }}
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        />
      </div>
    );
  }
}
