import axios from 'axios';

const baseUrl = 'https://dashboard-ebon-theta-67.vercel.app/api/data';

export const fetchEndYears = async () => {
    try {
        const response = await axios.get(`${baseUrl}/end-years`);
        return response.data;
    } catch (error) {
        console.error('Error fetching end years:', error);
        return [];
    }
};

export const fetchTopics = async () => {
    try {
        const response = await axios.get(`${baseUrl}/topics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        return [];
    }
};

export const fetchIntensities = async () => {
    try {
        const response = await axios.get(`${baseUrl}/intensities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching intensities:', error);
        return [];
    }
};

export const fetchSectors = async () => {
    try {
        const response = await axios.get(`${baseUrl}/sectors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sectors:', error);
        return [];
    }
};

export const fetchRegions = async () => {
    try {
        const response = await axios.get(`${baseUrl}/regions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching regions:', error);
        return [];
    }
};

export const fetchPestle = async () => {
    try {
        const response = await axios.get(`${baseUrl}/pestle`);
        return response.data;
    } catch (error) {
        console.error('Error fetching pestle:', error);
        return [];
    }
};
