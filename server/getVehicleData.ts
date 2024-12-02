"use server"
const API_URL = 'https://mobile.fmcsa.dot.gov/qc/services/'

export async function getVehicleData(dotNumbers: string[]): Promise<any[]> {
    const requests = dotNumbers.map(dotNumber =>
        fetch(API_URL + `carriers/${dotNumber}?webKey=d92a939adbc307a4922cfea3ff902a62090af1dd`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for DOT number: ${dotNumber}`);
                }
                return response.json();
            })
            .then(data => data.content.carrier)
    );

    try {
        return await Promise.all(requests);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
}
