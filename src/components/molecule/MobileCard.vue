<template>
    <div class="card">
        <div class="file-icon">
            <h4>.csv</h4>
        </div>
        <div class="file-info">
            <p class="file-name">{{file.fileName}}</p>
            <p class="file-description">{{file.fileDescription}}</p>
            <a class="file-download" :href="file.fileUrl" download><i>Download Now</i></a>
        </div>
    </div>
</template>

<script>
import {saveAs} from 'file-saver';
import axios from 'axios'

export default {
    props: ["file"],
    setup(props) {
        const downloadFile = () => {
            console.log(props.file.fileUrl);
            axios.get(props.file.fileUrl, {responseType: 'blob'})
            .then(response => {
                saveAs(response.data, props.file.fileDotName)
            })
        }

        return { downloadFile }
    }
}
</script>

<style scoped>
.card {
    background-color: rgb(234, 234, 235);
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    display: inline-grid;
    grid-template-columns: 15% 85%;
}

.file-icon {
    background-color: rgb(207, 207, 207);
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.file-icon h4 {
    margin: 0;
    color: rgb(55, 55, 55);
}

.file-info {
    padding: 0.3em 0.5em;
}

.file-name {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
}

.file-description {
    margin: 0;
    font-weight: 100;
    font-size: 15px;
}

.file-download {
    margin: 0;
    font-size: 13px;
}
</style>