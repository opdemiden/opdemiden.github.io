/** Class implementing the infoPanel view. */
class InfoPanel {
    /**
     * Creates a infoPanel Object
     */
    constructor() {
    }

    /**
     * Update the info panel to show info about the currently selected world cup
     * @param oneWorldCup the currently selected world cup
     */
    updateInfo(oneWorldCup) {

        // ******* TODO: PART III *******

        // Update the text elements in the infoBox to reflect:
        // World Cup Title, host, winner, runner_up, and all participating teams that year

        // Hint: For the list of teams, you can create an list element for each team.
        // Hint: Select the appropriate ids to update the text content.

        //Set Labels

        d3.select("#details")
            .select("#edition")
            .selectAll("p")
            .remove();
        d3.select("#details")
            .select("#host")
            .selectAll("p")
            .remove();
        d3.select("#details")
            .select("#host")
            .selectAll("p")
            .remove();
        d3.select("#details")
            .select("#winner")
            .selectAll("p")
            .remove();
        d3.select("#details")
            .select("#silver")
            .selectAll("p")
            .remove();
        d3.select("#details")
            .select("#runner_up")
            .selectAll("ul")
            .remove();
        d3.select("#details")
            .select("#teams")
            .selectAll("ul")
            .remove();

        d3.select("#details").select("#edition")
            .append("p").html(oneWorldCup["EDITION"]);
        d3.select("#details").select("#host")
            .append("p").html(oneWorldCup["host"]);
        d3.select("#details").select("#winner")
            .append("p").html(oneWorldCup["winner"]);
        d3.select("#details").select("#silver")
            .append("p").html(oneWorldCup["runner_up"]);

        let list = d3.select("#details").select("#teams").append("ul");
        oneWorldCup["teams_names"].forEach(function(name) {
            list.append("li").text(name);
        })

    }

}
