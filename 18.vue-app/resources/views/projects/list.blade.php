<div>
    <h3>My Projects</h3>
    @foreach($projects as $project)
        <div class="box">
            <h4>{{ $project->name }}</h4>
        </div>
    @endforeach
</div>
