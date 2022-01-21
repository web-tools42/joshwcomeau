require 'rails_helper'

describe MixesController do
  render_views
  describe "index" do
    before do
      Mix.create!(name: 'Supersonic Overdrive')
      Mix.create!(name: 'ChilZone')
      Mix.create!(name: 'Pot Pourri')

      xhr :get, :index, format: :json, keywords: keywords
    end
    
    subject(:results) { JSON.parse(response.body) }

    def extract_name
      ->(object) { object["name"] }
    end
  

    context "when the search finds results" do
      let(:keywords) { 'on' }
      
      it 'should 200' do
        expect(response.status).to eq(200)
      end

      it 'should return 2 results' do
        expect(results.size).to eq(2)
      end

      it 'should include "Supersonic Overdrive"' do
        expect(results.map(&extract_name)).to include('Supersonic Overdrive')
      end

      it 'should include "ChilZone"' do
        expect(results.map(&extract_name)).to include('ChilZone')
      end
    end

    context "when the search doesn't find results" do
      let(:keywords) { 'foo' }
      it 'should return no results' do
        expect(results.size).to eq(0)
      end
    end

    
  end
end