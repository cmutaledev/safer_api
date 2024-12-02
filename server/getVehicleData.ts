"use server"

const API_URL = 'https://mobile.fmcsa.dot.gov/qc/services/';

export async function getVehicleData(dotNumbers: string[]): Promise<any[]> {
    const requests = dotNumbers.map(async dotNumber => {
        try {
            const response = await fetch(`${API_URL}carriers/${dotNumber}?webKey=d92a939adbc307a4922cfea3ff902a62090af1dd`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                return { dotNumber, error: `Failed to fetch data: ${response.statusText} (${response.status})` };
            }

            const data = await response.json();
            
            return { dotNumber, data: data.content?.carrier };
        } catch (error: any) {
            return { dotNumber, error: `Error: ${error.message}` };
        }
    });

    const results = await Promise.allSettled(requests);

    // Separate successful and failed responses
    return results.map(result => (result.status === 'fulfilled' ? result.value : { error: 'Unknown error occurred' }));
}
