import Main from "../module/common/main";
import React from "react";
import renderer from 'react-test-renderer';

const mainComponent = new Main();
test("Fetches planets", () => {
    function afterFetchingPlanets(planets) {
        expect(planets.length).toEqual(6);
        expect(planets).toContain("name");
        expect(planets).toContain("distance");
        done();
    }
    mainComponent.fetchPlanets(afterFetchingPlanets);
})

test("Fetches vehicles", () => {
    function afterFetchingVehicles(vehicles) {
        expect(vehicles.length).toEqual(6);
        expect(vehicles).toContain("name");
        expect(vehicles).toContain("max_distance");
        expect(vehicles).toContain("speed");
        expect(vehicles).toContain("total_no");
        done();
    }
    mainComponent.fetchVehicles(afterFetchingVehicles);
})

it('renders correctly', () => {
    const tree = renderer
      .create(<Main />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });