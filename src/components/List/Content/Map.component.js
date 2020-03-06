import React from 'react';
import { Chart } from "react-google-charts";
import { useListContext } from '../context';

function Map() {
	const { countries, setCountryFilter, countryFilter } = useListContext();

	return (
		<div className={"list-map"}>
			<Chart
				chartEvents={[
					{
						eventName: "select",
						callback: ({ chartWrapper }) => {
							const chart = chartWrapper.getChart();
							const selection = chart.getSelection();
							if (selection.length === 0) return;
							const region = countries[selection[0].row + 1];
							let newRegion = region[0];
							if (newRegion === countryFilter) {
								newRegion = '';
							}
							setCountryFilter(newRegion);
						}
					}
				]}
				width={'100rem'}
				height={'50rem'}
				chartType="GeoChart"
				data={countries}
				mapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
				rootProps={{ 'data-testid': '1' }}
			/>
		</div>
	);
}

export default Map;