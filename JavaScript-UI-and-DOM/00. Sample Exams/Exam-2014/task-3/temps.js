	<ul class="books-list">	
			{{#each books}}		
			<li class="book-item">
				<a href="#" data-id={{id}}>
					<strong class="book-title">{{this.title}}</strong><span class="author">by {{this.author}}</span>
				</a>
			</li>	
			{{/each}}		
		</ul>
	</script>
	<script id="book-details-template" type='text/x-handlebars-template'>
			<div class="book-details">
			<h2 class="book-title">
				{{title}}
			</h2>
			<p><span class="isbn">{{isbn}}</span></p>
			<p>Published on <span class="publish-date">{{publicationDate}}</span> by <strong class="author">{{author}}</strong></p>
			<p class="description">{{description}}</p>
		</div>